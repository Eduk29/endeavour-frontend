import { IUserPreferencesParameters } from '../../user-preferences/model/user-preferences-parameters.model';
import { IApplicationNameParameters } from './application-name-parameters.model';
import { ISidemenuParameters } from './sidemenu-parameters.model';

export interface INavbarParameters {
  applicationNameParameters?: IApplicationNameParameters;
  color?: 'primary' | 'accent';
  sideMenuParameters?: ISidemenuParameters;
  userPreferencesParameters?: IUserPreferencesParameters;
}
