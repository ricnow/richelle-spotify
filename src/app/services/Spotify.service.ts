import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from '../../environments/environment.prod';
import  Spotify from 'spotify-web-api-js';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  spotifyApi: Spotify.SpotifyWebApiJs;

  constructor() { 
    this.spotifyApi = new Spotify();
   }

  obterUrlLogin() {
    const authEndPoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clienId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndPoint + clienId + redirectUrl + scopes + responseType;
  }

  obterTokenUrlCallback() {
    console.log(window.location.hash)
    if(!window.location.hash)
      return '';
    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
  }

  definerAcessToken(token: string) {
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }

}
