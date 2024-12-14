import { Injectable } from '@angular/core';

const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";
const EXP_DATE_KEY = "exp_date";

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private logged: boolean = false;

  constructor() {}

  signOut(): void {
    window.sessionStorage.clear();
    this.logged = false;
  }

  public saveAccessToken(access_token: string): void {
    window.sessionStorage.removeItem(ACCESS_TOKEN_KEY);
    window.sessionStorage.setItem(ACCESS_TOKEN_KEY, access_token);
  }

  public getAccessToken() {
    return window.sessionStorage.getItem(ACCESS_TOKEN_KEY);
  }

  public getRefreshToken() {
    return window.sessionStorage.getItem(REFRESH_TOKEN_KEY);
  }

  public saveRefreshToken(refresh_token: string): void {
    window.sessionStorage.removeItem(REFRESH_TOKEN_KEY);
    window.sessionStorage.setItem(REFRESH_TOKEN_KEY, refresh_token);
  }

  public getExpirationDate() {
    return sessionStorage.getItem(EXP_DATE_KEY);
  }

  public saveExpirationDate(expDate: string) {
    window.sessionStorage.removeItem(EXP_DATE_KEY);
    window.sessionStorage.setItem(EXP_DATE_KEY, expDate);
  }

  public checkLoginStatus() {
    if (window.sessionStorage.getItem(ACCESS_TOKEN_KEY) === null) {
      return false;
    }
    // @ts-ignore
    let tokenExpDate = new Date(window.sessionStorage.getItem(EXP_DATE_KEY));
    this.logged = tokenExpDate.valueOf() > new Date().valueOf();
    return this.logged;
  }
}
