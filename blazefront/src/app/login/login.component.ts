import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.loginForm = this.fb.group({
      login: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    console.log(this.loginForm.get("login")?.value);
    console.log(this.loginForm.get("password")?.value)
  }
}
