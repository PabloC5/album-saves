import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonApiService } from '../services/json-api.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;
  meuForm: FormGroup;


  constructor(
    private fb: FormBuilder, 
    private jsonServerService: JsonApiService,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.meuForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')]],
      password: ['', Validators.required]
    });
  }

  logar() {
    let encryptedString = CryptoJS.SHA256(this.meuForm.get('password')?.value).toString(CryptoJS.enc.Hex);

    this.meuForm.get('password')?.setValue(encryptedString)
    console.log(this.meuForm.get('password')?.value)
    this.jsonServerService.loginJson(this.meuForm.get('email')?.value, this.meuForm.get('password')?.value).subscribe(
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
