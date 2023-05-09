import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AvatarModule } from '../avatar/avatar.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [AvatarModule, CommonModule, MatButtonModule, MatIconModule, MatToolbarModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
