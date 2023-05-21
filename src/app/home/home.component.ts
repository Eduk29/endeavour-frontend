import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subject, takeUntil, tap } from 'rxjs';

import { IPerson } from './../person/models/person.model';
import { PersonService } from './../person/services/person.service';
import { INavbarParameters } from './../shared/components/navbar/model/navbar-parameters.models';
import { ISearchFilter } from './../shared/components/search-input/model/search-filter.model';
import { ISearchInputParameters } from './../shared/components/search-input/model/search-input-parameters.model';
import { IMenuActionButton } from './../shared/model/menu-action-button.model';
import { IPaginatedResponse } from './../shared/model/paginated-response.model';
import { IPaginationParameters } from './../shared/model/pagination-parameters.model';
import { ISystemValue } from './../shared/model/system-value.model';
import { ConfigurationsService } from './../shared/services/configurations.service';
import { homeNavbarConfiguration } from './configurations/home-navbar.configuration';
import { homeSearchConfiguration } from './configurations/home-search.configuration';

@Component({
  selector: 'edv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public homeNavbarParameters: INavbarParameters = homeNavbarConfiguration;
  public homeSearchParameters: ISearchInputParameters = homeSearchConfiguration;
  public paginationParameters: IPaginationParameters = {};
  public personList: IPerson[] = [];

  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private configurationService: ConfigurationsService, private personService: PersonService) {
    this.configureLogoutAction();
    this.configurePagination();
  }

  ngOnInit(): void {
    this.listAllSearchOptions();
    this.listAllPersons();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.unsubscribe();
  }

  public paginationEvent(page: PageEvent): void {
    this.configurePagination(page.pageIndex, page.pageSize);
    this.listAllPersons();
  }

  public searchEvent(searchFilter: ISearchFilter) {
    console.log('Search: ', searchFilter);
  }

  private configureLogoutAction(): void {
    this.actionButtons?.map((button: IMenuActionButton) => {
      if (button.type === 'logout') {
        button.action = this.logout;
      }
    });
  }

  private configurePagination(pageIndex?: number, pageSize?: number, pageSizeOptions?: number[], totalCount?: number): void {
    this.paginationParameters.pageIndex = pageIndex || 0;
    this.paginationParameters.pageSize = pageSize || 10;
    this.paginationParameters.pageSizeOptions = pageSizeOptions || [1, 10, 50, 100];
    this.paginationParameters.totalCount = totalCount || 0;
  }

  private listAllPersons(): void {
    console.log('Teste: ', this.paginationParameters);
    this.personService
      .listAll(this.paginationParameters)
      .pipe(
        tap((response: IPaginatedResponse<IPerson>) => {
          this.personList = response.content || [];
          this.paginationParameters = {
            ...this.paginationParameters,
            pageIndex: response.pageNumber,
            pageSize: response.pageSize,
            totalCount: response.totalElements,
          };
        })
      )
      .subscribe();
  }

  private listAllSearchOptions(): void {
    this.configurationService
      .listAllSearchOptions()
      .pipe(
        tap((response: ISystemValue[]) => (this.homeSearchParameters.searchTypeList = response)),
        takeUntil(this.onDestroy$)
      )
      .subscribe();
  }

  private logout(): void | undefined {
    console.log('Logout via Component');
  }

  public get actionButtons(): IMenuActionButton[] | undefined {
    return this.homeNavbarParameters.userPreferencesParameters?.actionButtons || undefined;
  }
}
