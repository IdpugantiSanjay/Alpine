import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { Task } from '../interfaces/task';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { TaskStatus } from '../enums/task-status.enum';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpService: HttpService) { }

  username = environment.user.username;

  public addTask(task: Task) {
    return this.httpService.postRequest(`${environment.url}/${this.username}/tasks`, task);
  }

  public tasks(searchText?: string): Observable<Task[]> {
    if (searchText) {
      return this.httpService.getRequest<Task[]>(`${environment.url}/${this.username}/tasks`, { searchText });
    }
    return this.httpService.getRequest<Task[]>(`${environment.url}/${this.username}/tasks`);
  }


  public deleteTask(taskId: string): Observable<boolean> {
    return this.httpService
      .deleteRequest<boolean>(`${environment.url}/${this.username}/tasks/${taskId}`);
  }

  public changeTaskStatus(taskId: string, taskStatus: TaskStatus) {
    return this.httpService
      .putRequest(`${environment.url}/${this.username}/tasks/${taskId}`, { taskStatus });
  }

  public completedTasks(): Observable<Task[]> {
    return this.httpService
      .getRequest<Task[]>(`${environment.url}/${this.username}/tasks`, { statusId: TaskStatus.Completed });
  }
}
