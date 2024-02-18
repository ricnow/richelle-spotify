import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }

  obterUrlLogin() {
    const authEndPoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clienId = `cliend_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scopes=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndPoint + clienId + redirectUrl + scopes + responseType;
  }

}
