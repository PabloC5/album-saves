import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../services/album.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {
  data: any;
  error: any;
  idUserLogin: any | undefined;
  constructor(
    private albumService: AlbumService, 
    private userService: UserService) {}

  ngOnInit() {
    this.getAlbunfinal() 
    let userLogin = this.userService.getUserLogin(); 
    this.idUserLogin = userLogin[0].id
  }

  getAlbunfinal() {
    this.albumService.getAlbun().then((result) => {
      this.data = result;
    }).catch((error) => {
      this.error = error;
    });
  }

}
