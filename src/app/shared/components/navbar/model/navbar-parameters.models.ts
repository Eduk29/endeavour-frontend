import { AvatarParameters } from '../../avatar/model/avatar-parameters.model';
import { UserPreferencesParameters } from '../../user-preferences/model/user-preferences-parameters.model';
import { ApplicationNameParameters } from './application-name-parameters.model';
import { SidemenuParameters } from './sidemenu-parameters.model';

export interface NavbarParameters {
  applicationNameParameters?: ApplicationNameParameters;
  color?: 'primary' | 'accent';
  sideMenuParameters?: SidemenuParameters;
  userPreferencesParameters?: UserPreferencesParameters;
}
