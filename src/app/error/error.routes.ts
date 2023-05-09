import { Routes } from '@angular/router';

import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const ERROR_ROUTES: Routes = [
  { path: 'not-found', component: NotFoundComponent, pathMatch: 'full' },
  { path: 'not-authorized', component: NotAuthorizedComponent, pathMatch: 'full' },
];
