import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-screen',
  templateUrl: './initial-screen.component.html',
  styleUrls: ['./initial-screen.component.scss']
})
export class InitialScreenComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {    
    console.log(this.router.url);
    
  }
  
  buttonLogin = 'Logar';
  buttonSing = 'Cadastrar';
  routerName = '/login';
  routerRegister = '/register';
  buttonColor = 'colorLogin';
  buttonColorCadastro= 'colorCadastro';
  isInitialScreen: boolean = true;
}
