import { Component } from '@angular/core';
import { INavbarParameters } from 'src/app/shared/components/navbar/model/navbar-parameters.models';

import { personNavbarConfiguration } from '../../configurations/person-navbar.configuration';

@Component({
  selector: 'edv-person-edit',
  templateUrl: './person-edit.component.html',
  styleUrls: ['./person-edit.component.scss'],
})
export class PersonEditComponent {
  public personNavbarParameters: INavbarParameters = personNavbarConfiguration;
}
