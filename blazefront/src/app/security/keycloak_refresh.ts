export class KeycloakRefreshInfo {
  client_id: string = 'blazebank';
  client_secret: string = 'ez6yvtKKyzyUP265ZW7f5SPb6a30NA5W';
  grant_type: string = 'refresh_token';
  refresh_token: string;

  constructor(refresh_token: string) {
    this.refresh_token = refresh_token;
  }
}
