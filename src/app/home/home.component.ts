import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfigurationsService } from './../shared/services/configurations.service';

import { Subject, takeUntil, tap } from 'rxjs';
import { INavbarParameters } from '../shared/components/navbar/model/navbar-parameters.models';
import { ISearchFilter } from '../shared/components/search-input/model/search-filter.model';
import { ISearchInputParameters } from '../shared/components/search-input/model/search-input-parameters.model';
import { IMenuActionButton } from '../shared/model/menu-action-button.model';
import { ISystemValue } from '../shared/model/system-value.model';
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

  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private configurationService: ConfigurationsService) {
    this.configureLogoutAction();
  }

  ngOnInit(): void {
    this.listAllSearchOptions();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.unsubscribe();
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

  private listAllSearchOptions(): void {
    this.configurationService.listAllSearchOptions();
    this.configurationService.searchOptions$
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
