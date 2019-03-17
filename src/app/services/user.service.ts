import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public loggedUser: User = {} as User;

  constructor() {
    this.loggedUser.id = '1';
  }
}
