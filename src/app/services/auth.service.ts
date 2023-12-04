import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JsonApiService } from './json-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private jsonServerService: JsonApiService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  logado: boolean = false;

  isLogged(): boolean {
    return this.logado;
  }

  login(data: any) {
    this.jsonServerService.loginJson(data.get('email')?.value, data.get('password')?.value).subscribe(
      (response) => {
        if (response.length > 0) {
          localStorage.setItem('userLogin', JSON.stringify(response))
          console.log('Login successful');
          this.toastr.success('Login realizado com sucesso', 'Sucesso');
          this.router.navigate(['/home'])
        } else {
          console.log('Invalid credentials');
          this.toastr.error('Senha incorreta', 'Erro');
        }
      },
      (error) => {
        console.error('Erro ao efetuar o login:', error);
        this.toastr.error('Erro ao efetuar o login', 'Erro');
      }
    );
  }

}
