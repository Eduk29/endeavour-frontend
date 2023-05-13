import { Component, Input } from '@angular/core';

import { IUserPreferencesParameters } from '../user-preferences/model/user-preferences-parameters.model';
import { INavbarParameters } from './model/navbar-parameters.models';

@Component({
  selector: 'edv-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() navbarParameters?: INavbarParameters;

  public get applicationName(): string | undefined {
    return this.navbarParameters?.applicationNameParameters?.applicationName;
  }

  public get ariaLabelApplicationName(): string | undefined {
    return this.navbarParameters?.applicationNameParameters?.ariaLabel;
  }

  public get ariaLabelSideMenu(): string | undefined {
    return this.navbarParameters?.sideMenuParameters?.ariaLabel;
  }

  public get userPreferencesParameters(): IUserPreferencesParameters | undefined {
    return this.navbarParameters?.userPreferencesParameters;
  }

  public get color(): string {
    return this.navbarParameters?.color || 'primary';
  }

  public get displayApplicationName(): boolean {
    return this.navbarParameters?.applicationNameParameters?.displayApplicationName || false;
  }

  public get displaySideMenuButton(): boolean {
    return this.navbarParameters?.sideMenuParameters?.displaySideMenuButton || false;
  }

  public get sidemenuIcon(): string {
    return this.navbarParameters?.sideMenuParameters?.iconName || 'menu';
  }
}
