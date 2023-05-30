import { Routes } from '@angular/router';

import { PersonDetailsComponent } from './pages/person-details/person-details.component';
import { PersonEditComponent } from './pages/person-edit/person-edit.component';

export const PERSON_ROUTES: Routes = [
  { path: ':id', component: PersonDetailsComponent, pathMatch: 'full' },
  { path: ':id/edit', component: PersonEditComponent, pathMatch: 'full' },
];
