import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'album-saves';
  buttonLogin = 'Logar'
  buttonSing = 'Cadastrar'
  routerName = '/login'
  buttonColor = 'colorLogin'
}
