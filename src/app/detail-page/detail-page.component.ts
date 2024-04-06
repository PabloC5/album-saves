import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from '../model/album';
import { User } from '../model/user';
import { AlbumService } from '../services/album.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute, 
    private albumService: AlbumService,
    private userService: UserService
  ) {}

  albumId: number | undefined;
  album: any;
  userLogado?: User;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.albumId = params['albumId'];
    });

    this.getAlbum(this.albumId!!);
    let userLogin = this.userService.getUserLogin(); 
    this.userLogado = userLogin[0]
    console.log(this.userLogado);
  }

  getAlbum(albumId: number) {
    this.albumService.getAlbumForId(albumId).subscribe((result) => {
      this.album = result
      console.log(this.album);
    }, (error) => {
      console.error("Erro ao buscar album pelo id", error);
    })
  }
}
