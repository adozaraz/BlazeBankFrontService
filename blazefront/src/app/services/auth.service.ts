import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthLoginInfo} from '../security/login-info';
import {KeycloakLoginInfo} from '../security/keycloak_login';
import {JwtResponse} from '../security/jwt-response';
import {KeycloakRefreshInfo} from '../security/keycloak_refresh';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private keycloakUrl = 'http://keycloak:8080/';
  private realm = 'blazebank'

  constructor(private http: HttpClient) {}

  attemptAuth(credentials: AuthLoginInfo) {
    let keycloakInfo: KeycloakLoginInfo = new KeycloakLoginInfo(credentials.username, credentials.password);
    return this.http.post<JwtResponse>(`${this.keycloakUrl}/realms/${this.realm}/protocol/openid-connect/token`, keycloakInfo);
  }

  renewToken(token: string) {
    let keycloakRefresh: KeycloakRefreshInfo = new KeycloakRefreshInfo(token);
    return this.http.post<JwtResponse>(`${this.keycloakUrl}/realms/${this.realm}/protocol/openid-connect/token`, keycloakRefresh);
  }
}
