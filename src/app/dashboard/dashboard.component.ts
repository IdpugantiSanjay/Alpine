import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, switchMap, share, shareReplay, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  searchTasksForm = new FormGroup({
    searchField: new FormControl('')
  });

  tasks: Observable<Task[]>;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.tasks();

    this.searchTasksForm.controls['searchField'].valueChanges
      .pipe(
        // wait for 1 second after user types
        debounceTime(1000),
        share(),
        // return list of tasks which contains search strings
        switchMap(value => this.tasks = this.taskService.tasks(value)),
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
        switchMap(() => this.tasks = this.taskService.tasks())  
      )
      .subscribe();
  }

}
