import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { JsonApiService } from './json-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private jsonApiService: JsonApiService) { }

  saveUser(user: User) {
    debugger
    // localStorage.setItem('user', JSON.stringify(user))
    this.jsonApiService.postJson(user, 'users').subscribe(
      (response) => {
        console.log('Post criado com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao criar post:', error);
      }
    );
  }

}
