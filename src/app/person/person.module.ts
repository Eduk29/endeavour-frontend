import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { NavbarModule } from './../shared/components/navbar/navbar.module';
import { PersonDataDisplayerComponent } from './components/person-data-displayer/person-data-displayer.component';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { PersonDetailsComponent } from './pages/person-details/person-details.component';
import { PersonEditComponent } from './pages/person-edit/person-edit.component';
import { PersonRoutingModule } from './person-routing.module';

@NgModule({
  declarations: [PersonTableComponent, PersonDataDisplayerComponent, PersonDetailsComponent, PersonEditComponent],
  imports: [CommonModule, HttpClientModule, MatCardModule, MatPaginatorModule, MatTableModule, NavbarModule, PersonRoutingModule],
  exports: [PersonTableComponent],
})
export class PersonModule {}
