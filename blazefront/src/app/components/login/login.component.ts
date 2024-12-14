import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { AuthLoginInfo } from "../../security/login-info";
import { AuthService } from "../../services/auth.service";
import { TokenStorageService } from "../../security/token-storage.service";
import { Router } from '@angular/router';
import moment from 'moment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
      public fb: FormBuilder,
      public authService: AuthService,
      public tokenStorage: TokenStorageService,
      private router: Router
  ) {
    this.loginForm = this.fb.group({
      login: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    let loginInfo: AuthLoginInfo = new AuthLoginInfo(this.loginForm.get("login")?.value, this.loginForm.get("password")?.value);
    this.authService.attemptAuth(loginInfo).subscribe((data) => {
      this.tokenStorage.saveAccessToken(data.access_token);
      this.tokenStorage.saveRefreshToken(data.refresh_token);
      this.tokenStorage.saveExpirationDate(moment(new Date()).add(data.expires_in).format('YYYY-MM-DD HH:mm:ss'));
      this.router.navigate(['cards']);
    }, error => {
      alert(error.message);
    });
    this.loginForm.reset();
  }
}
