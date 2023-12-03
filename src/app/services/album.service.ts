import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album } from '../model/album';
import { JsonApiService } from './json-api.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(
    private jsonApiService: JsonApiService, 
    private http: HttpClient
  ) { }

  url = 'http://localhost:3000/albuns';

  saveAlbum(album: Album) {
    // debugger
    // localStorage.setItem('user', JSON.stringify(user))
    this.jsonApiService.postJson(album, 'albuns').subscribe(
      (response) => {
        console.log('Post criado com sucesso:', response);
      },
      (error) => {
        console.error('Erro ao criar post:', error);
      }
    );
  }


  getAlbun(){
    return this.http.get(this.url).toPromise();
  }

}
