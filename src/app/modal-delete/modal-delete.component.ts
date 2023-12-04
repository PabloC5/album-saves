import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AlbumService } from '../services/album.service';

@Component({
  selector: 'app-modal-delete',
  templateUrl: './modal-delete.component.html',
  styleUrls: ['./modal-delete.component.scss']
})
export class ModalDeleteComponent {
  error: any;
  constructor(
    private albumService: AlbumService, 
    public dialogRef: MatDialogRef<ModalDeleteComponent>,
    private toastr: ToastrService
  ) {}

  deletarAlbum() {
    console.log("salve");
    this.albumService.deleteAlbum().subscribe(() => {
      console.log("Delete do album executado corretamente");
      this.toastr.success('Album deletado com sucesso', 'Sucesso');
      this.teste()
    },(error) => {
      console.error("Erro ao deletar album", error);
      this.toastr.error('Erro ao deletar album', 'Erro');
    })
    this.dialogRef.close();
  }

  teste() {
    this.albumService.getAlbun().then((result) => {
      this.albumService.albumUp = result;
    }).catch((error) => {
      this.error = error;
    });
  }
}
