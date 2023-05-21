import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPerson } from '../../models/person.model';
import { IPaginationParameters } from 'src/app/shared/model/pagination-parameters.model';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'edv-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss'],
})
export class PersonTableComponent {
  @Input() personList!: IPerson[];
  @Input() paginationParameters!: IPaginationParameters;

  @Output() paginationEvent = new EventEmitter();

  public displayedColumns: string[] = ['id', 'name', 'age', 'birthday'];

  public pagination(page: PageEvent): void {
    this.paginationEvent.emit(page);
  }

  public get displayTable(): boolean {
    return this.personList && this.personList.length > 0;
  }

  public get length(): number {
    return this.paginationParameters.totalCount || 0;
  }

  public get pageIndex(): number {
    return this.paginationParameters.pageIndex || 0;
  }

  public get pageSize(): number {
    return this.paginationParameters.pageSize || 0;
  }

  public get pageSizeOptions(): number[] {
    return this.paginationParameters.pageSizeOptions || [10, 25, 50, 100];
  }
}
