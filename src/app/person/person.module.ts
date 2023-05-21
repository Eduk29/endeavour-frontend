import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';

import { PersonTableComponent } from './components/person-table/person-table.component';

@NgModule({
  declarations: [PersonTableComponent],
  imports: [CommonModule, HttpClientModule, MatCardModule, MatPaginatorModule, MatTableModule],
  exports: [PersonTableComponent],
})
export class PersonModule {}
