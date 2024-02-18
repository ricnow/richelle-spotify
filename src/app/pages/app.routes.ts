import { Routes } from '@angular/router';

export const AppRotas: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./login/login.modules').then(m =>  m.LoginModule)
    }
]
