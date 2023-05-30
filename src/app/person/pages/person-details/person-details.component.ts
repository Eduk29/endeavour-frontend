import { Component } from '@angular/core';

import { personNavbarConfiguration } from '../../configurations/person-navbar.configuration';
import { INavbarParameters } from './../../../shared/components/navbar/model/navbar-parameters.models';

@Component({
  selector: 'edv-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent {

  public personNavbarParameters: INavbarParameters = personNavbarConfiguration;
}
