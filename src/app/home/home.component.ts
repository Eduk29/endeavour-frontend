import { Component } from '@angular/core';

import { INavbarParameters } from '../shared/components/navbar/model/navbar-parameters.models';
import { homeNavbarConfiguration } from './configurations/home-navbar.configuration';
import { IMenuActionButton } from '../shared/model/menu-action-button.model';
import { ISearchInputParameters } from '../shared/components/search-input/model/search-input-parameters.model';
import { homeSearchConfiguration } from './configurations/home-search.configuration';
import { ISearchFilter } from '../shared/components/search-input/model/search-filter.model';

@Component({
  selector: 'edv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public homeNavbarParameters: INavbarParameters = homeNavbarConfiguration;
  public homeSearchParameters: ISearchInputParameters = homeSearchConfiguration;

  constructor() {
    this.configureLogoutAction();
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

  private logout(): void | undefined {
    console.log('Logout via Component');
  }

  public get actionButtons(): IMenuActionButton[] | undefined {
    return this.homeNavbarParameters.userPreferencesParameters?.actionButtons || undefined;
  }
}
