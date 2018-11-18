import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { TaskService } from '../services/task.service';
import { Task } from '../interfaces/task';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, switchMap, share, shareReplay, tap } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  searchTasksForm = new FormGroup({
    searchField: new FormControl('')
  });

  tasks;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.tasks();

    this.searchTasksForm.controls['searchField'].valueChanges
      .pipe(
        debounceTime(1000),
        share(),
        switchMap(value => this.tasks = this.taskService.tasks(value)),
      )
      .subscribe();
  }

}
