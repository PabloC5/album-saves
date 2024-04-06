import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Album } from '../model/album';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-album-register',
  templateUrl: './album-register.component.html',
  styleUrls: ['./album-register.component.scss']
})
export class AlbumRegisterComponent {
  hide = true;
  meuForm: FormGroup;
  userEmail: string = "";
  album?: Album;

  ngOnInit(): void {
    this.album = new Album('','','');
  }

  constructor(
    private fb: FormBuilder, 
    private toastr: ToastrService,
    private albumService: AlbumService
  ) {
    this.meuForm = this.fb.group({
      urlCapa: ['', Validators.required],
      nameAlbum: ['', Validators.required]
    });
  }
  

  submitForm() {
    let idLogado = JSON.parse(localStorage.getItem('userLogin')!!)[0].id;
    this.album!!.userId = idLogado;
    this.albumService.saveAlbum(this.album!!);
    this.toastr.success('Cadastro de album realizado com sucesso', 'Sucesso');
    this.album = new Album('','','');
  }


}
