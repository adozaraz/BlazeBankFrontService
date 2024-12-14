export class KeycloakLoginInfo {
  username: string;
  password: string;
  client_id: string = 'blazebank';
  client_secret: string = 'ez6yvtKKyzyUP265ZW7f5SPb6a30NA5W';
  grant_type: string = 'password';

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
