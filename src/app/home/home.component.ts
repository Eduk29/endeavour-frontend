import { Component } from '@angular/core';

import { NavbarParameters } from '../shared/components/navbar/model/navbar-parameters.models';

@Component({
  selector: 'edv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  public homeNavbarParameters: NavbarParameters = {
    applicationNameParameters: {
      applicationName: 'Endeavour',
      ariaLabel: 'Endeavour Application',
      displayApplicationName: true,
    },
    avatarParameters: {
      displayerMode: 'icon',
      label: 'EM',
      iconName: 'person',
    },
    color: 'primary',
  };
}
