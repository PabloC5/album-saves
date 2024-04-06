import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JsonApiService } from '../services/json-api.service';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

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
    private toastr: ToastrService,
    private authService: AuthService
  ) {
    this.meuForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')]],
      password: ['', Validators.required]
    });
  }

  logar() {
    let encriptPasswor = CryptoJS.SHA256(this.meuForm.get('password')?.value).toString(CryptoJS.enc.Hex);
    this.meuForm.get('password')?.setValue(encriptPasswor)
    this.authService.login(this.meuForm);
  }
}
