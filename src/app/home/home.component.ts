import { Component } from '@angular/core';

import { NavbarParameters } from '../shared/components/navbar/model/navbar-parameters.models';
import { homeNavbarConfiguration } from './configurations/home-navbar.configuration';
import { MenuActionButton } from '../shared/model/menu-action-button.model';

@Component({
  selector: 'edv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public homeNavbarParameters: NavbarParameters = homeNavbarConfiguration;

  constructor() {
    this.actionButtons?.map((button: MenuActionButton) => {
      if (button.type === 'logout') {
        button.action = this.logout;
      }
    });
  }

  public get actionButtons(): MenuActionButton[] | undefined {
    return this.homeNavbarParameters.userPreferencesParameters?.actionButtons || undefined;
  }

  private logout(): void | undefined {
    console.log('Logout via Component');
  }
}
