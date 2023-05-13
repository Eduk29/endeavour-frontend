import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { NavbarModule } from '../shared/components/navbar/navbar.module';
import { SearchInputModule } from '../shared/components/search-input/search-input.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, MatCardModule, NavbarModule, SearchInputModule],
})
export class HomeModule {}
