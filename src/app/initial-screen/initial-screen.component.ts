import { Component } from '@angular/core';

@Component({
  selector: 'app-initial-screen',
  templateUrl: './initial-screen.component.html',
  styleUrls: ['./initial-screen.component.scss']
})
export class InitialScreenComponent {
  buttonLogin = 'Logar';
  buttonSing = 'Cadastrar';
  routerName = '/login';
  buttonColor = 'colorLogin';
  buttonColorCadastro= 'colorCadastro';
}
