import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { UserService } from './user.service';
import { Container } from '../interfaces/container.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {
  containerEndpoint: string;

  constructor(private userService: UserService, private http: HttpService) {
    this.containerEndpoint = `${environment.url}/api/${userService.loggedUser.id}/containers`;
  }

  addContainer(container: Container) {
    return this.http.postRequest(this.containerEndpoint, container);
  }

  getContainers(): Observable<Container[]> {
    return this.http.getRequest(this.containerEndpoint);
  }
}
