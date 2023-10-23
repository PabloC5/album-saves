import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { UserService } from '../services/user.service';


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
    private userService: UserService
  ) {
    this.meuForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')]],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  

  submitForm() {
    debugger
    console.log("teste");
    console.log(this.user);
    this.userService.saveUser(this.user!!)
    
  }

}
