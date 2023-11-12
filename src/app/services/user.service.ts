import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  saveUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user))
  }

}
