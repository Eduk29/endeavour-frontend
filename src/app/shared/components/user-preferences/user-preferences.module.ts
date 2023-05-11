import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { AvatarModule } from '../avatar/avatar.module';
import { UserPreferencesComponent } from './user-preferences.component';
import { UserPreferencesMenuComponent } from './user-preferences-menu/user-preferences-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserPreferencesComponent, UserPreferencesMenuComponent],
  imports: [AvatarModule, CommonModule, MatButtonModule, MatIconModule, MatMenuModule, RouterModule],
  exports: [UserPreferencesComponent],
})
export class UserPreferencesModule {}
