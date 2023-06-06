import { Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication/guards/authentication.guard';

export const APP_ROUTES: Routes = [
  { path: 'authentication', loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule) },
  { path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule), canActivate: [AuthenticationGuard] },
  { path: 'person', loadChildren: () => import('./person/person.module').then(m => m.PersonModule) },
  { path: '**', redirectTo: 'error/not-found' },
];
