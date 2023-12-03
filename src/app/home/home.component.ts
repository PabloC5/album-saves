import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDeleteComponent } from '../modal-delete/modal-delete.component';
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
    private userService: UserService,
    public dialog: MatDialog
    ) {}

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


  openModal(idDeleteAlbum: number) {
    console.log(idDeleteAlbum);
    this.albumService.idDeleteAlbum = idDeleteAlbum;
    const dialogRef = this.dialog.open(ModalDeleteComponent, {
      width: '300px', // Defina o tamanho da modal conforme necessário
      // Outras opções como height, data, etc.
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Modal fechada. Resultado: ${result}`);
      // Faça algo com o resultado, se necessário
    });
  }

}
