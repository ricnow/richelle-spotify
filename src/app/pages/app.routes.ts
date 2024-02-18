import { Routes } from '@angular/router';

export const AppRotas: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.modules').then(x =>  x.LoginModule)
    }
]
