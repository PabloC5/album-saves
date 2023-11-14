import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonApiService {

  constructor(private http: HttpClient) { }


  postJson(data: any, routeName: string): Observable<any> {
    let url: string = `http://localhost:3000/${routeName}`;
    return this.http.post(url, data);
  }

  loginJson(email: string, password: string): Observable<any> {
    return this.http.get(`http://localhost:3000/users?email=${email}&password=${password}`);
  }
}
