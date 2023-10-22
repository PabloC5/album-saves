import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hide = true;
  meuForm: FormGroup;
  userEmail: string = "";

  constructor(private fb: FormBuilder) {
    this.meuForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')]],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  submitForm() {
    debugger
    console.log("teste");
    console.log(this.userEmail);
    
  }

}
