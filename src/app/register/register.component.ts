import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { ToastrService } from 'ngx-toastr';
import * as CryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  meuForm: FormGroup;
  userEmail: string = "";
  user?: User;

  ngOnInit(): void {
    this.user = new User('', '','');
  }

  constructor(
    private fb: FormBuilder, 
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    this.meuForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')]],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  

  submitForm() {
    let encryptedString = CryptoJS.SHA256(this.user!!.password!!).toString(CryptoJS.enc.Hex);
    this.user!!.password = encryptedString
    this.userService.saveUser(this.user!!)
    this.toastr.success('Cadastro realizado com sucesso', 'Sucesso');
    this.router.navigate(['/login'])
    this.user = new User('', '','');
  }

}
