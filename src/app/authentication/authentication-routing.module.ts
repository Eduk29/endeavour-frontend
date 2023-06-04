import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AUTHENTICATION_ROUTES } from './authentication.routes';

const routes: Routes = AUTHENTICATION_ROUTES;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
