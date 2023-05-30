import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PERSON_ROUTES } from './person.routes';

const routes: Routes = PERSON_ROUTES;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonRoutingModule {}
