import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { APPLICATION_NAVBAR_PARAMETERS } from './app.configurations';
import { IAvatarParameters } from './shared/components/avatar/model/avatar-parameters.model';
import { INavbarParameters } from './shared/components/navbar/model/navbar-parameters.models';
import { IMenuActionButton } from './shared/model/menu-action-button.model';

@Component({
  selector: 'edv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public navbarParameters: INavbarParameters = APPLICATION_NAVBAR_PARAMETERS;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.configureLogoutAction();
    if (this.navbarParameters) {
      this.attachUserData();
    }
  }

  public get actionButtons(): IMenuActionButton[] | undefined {
    return this.navbarParameters.userPreferencesParameters?.actionButtons || undefined;
  }

  private configureLogoutAction(): void {
    this.actionButtons?.map((button: IMenuActionButton) => {
      if (button.type === 'logout') {
        button.action = this.logout;
      }
    });
  }

  private attachUserData(): void {
    if (this.navbarParameters.userPreferencesParameters) {
      const avatarParameters: IAvatarParameters = {
        displayerMode: 'text',
      };

      this.navbarParameters.userPreferencesParameters.displayUserPreferences = true;
      this.navbarParameters.userPreferencesParameters.avatarParameters = avatarParameters;
      this.navbarParameters.userPreferencesParameters.fullname = sessionStorage.getItem('personName') as string;
      this.navbarParameters.userPreferencesParameters.username = sessionStorage.getItem('username') as string;
    }
  }

  private logout(): void | undefined {
    console.log('Logout via Component');
  }

  public get loginRoute(): boolean {
    let displayHeader = false;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        displayHeader = event.url.includes('login');
      }
    });
    return displayHeader;
  }
}
