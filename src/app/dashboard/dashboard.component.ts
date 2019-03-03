import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, switchMap, share, shareReplay, tap, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { TaskStatus } from '../enums/task-status.enum';

import * as R from 'ramda';
import { Container } from '../interfaces/container.interface';

import { v1 } from 'uuid';
import uuid = require('uuid');
import { MatDialog } from '@angular/material';
import { EnterContainerNamePopupComponent } from '../enter-container-name-popup/enter-container-name-popup.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  containers: Array<Container> = [];

  showNewCardField = false;

  searchTasksForm = new FormGroup({
    pendingTasksSearchField: new FormControl(''),
    completedTasksSearchField: new FormControl(''),
  });

  tasks: Observable<Task[]>;

  completedTasks: Observable<Task[]>;

  constructor(private taskService: TaskService, public dialog: MatDialog) { }

  ngOnInit() {
    this.populate();

    this.searchTasksForm.controls['pendingTasksSearchField'].valueChanges
      .pipe(
        // wait for 1 second after user types
        debounceTime(500),
        share(),
        // return list of tasks which contains search strings
        tap(value => this.tasks = this.taskService.tasks(value)),
      )
      .subscribe();

    this.searchTasksForm.controls['completedTasksSearchField'].valueChanges
      .pipe(
        debounceTime(500),
        tap(value => this.completedTasks = this.taskService.completedTasks(value))
      )
      .subscribe();
  }

  /**
   * Delete task and display list
   * @param taskId id of the task to delete
   */
  onTaskDeleteEvent(taskId: string) {
    this.taskService.deleteTask(taskId)
      .pipe(
        // after deleting the task call task list again to display latest data
        tap(() => this.populate())
      )
      .subscribe();
  }

  onTaskCompleteEvent(taskId: string) {
    this.taskService
      .changeTaskStatus(taskId, TaskStatus.Completed)
      .pipe(tap(() => this.populate()))
      .subscribe();
  }

  private populate() {
    this.tasks = this.taskService.tasks();
    this.completedTasks = this.taskService.completedTasks();
  }


  public addNewContainer() {

    function isNotEmpty(containerName: string): boolean { return !R.isEmpty(containerName); }

    var popupClosedObservable = this.dialog.open(EnterContainerNamePopupComponent).afterClosed();

    popupClosedObservable
      .pipe(filter(isNotEmpty), tap())
      .subscribe((result: string) => {
        this.containers.push({ id: v1(), name: result });
      });
  }

  public onContainerDelete(container: Container) {
    this.containers = R.without([container], this.containers);
  }

}
