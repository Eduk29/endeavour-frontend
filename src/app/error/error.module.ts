import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorRoutingModule } from './error-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

@NgModule({
  declarations: [NotFoundComponent, NotAuthorizedComponent],
  imports: [CommonModule, ErrorRoutingModule],
})
export class ErrorModule {}
