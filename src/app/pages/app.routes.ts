import { Router, Routes } from '@angular/router';
import { SpotifyService } from '../services/Spotify.service';
import { inject } from '@angular/core';
import { usuarioEstaLogadoResolver } from "../resolvers/usuario-esta-logado.resolver";

export const AppRotas: Routes = [
    {
        path: '',
        redirectTo: 'player',
        pathMatch: 'full'
    },
    {
        path: 'player',
    loadChildren: () => import('./player/player.module').then(x => x.PlayerModule),
    resolve: {
      usuarioEstaLogado: usuarioEstaLogadoResolver,
    }
  },
    {
        path: 'login',
        loadChildren: () => import('./login/login.modules').then(x =>  x.LoginModule)
    }
]
