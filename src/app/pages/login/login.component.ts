import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/Spotify.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit { 

  constructor(private SpotifyService: SpotifyService){}

  ngOnInit(): void {
    
  }
  abriPaginaLogin() {
    window.location.href = this.SpotifyService.obterUrlLogin();
  }
}
