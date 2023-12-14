import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./features/auth/auth.module').then((module) => module.AuthModule),
  },
  {
    path: 'login',
    redirectTo: 'auth',
  },
];
