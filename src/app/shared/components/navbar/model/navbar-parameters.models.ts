import { AvatarParameters } from '../../avatar/model/avatar-parameters.model';
import { ApplicationNameParameters } from './application-name-parameters.model';
import { SidemenuParameters } from './sidemenu-parameters.model';

export interface NavbarParameters {
  applicationNameParameters?: ApplicationNameParameters;
  avatarParameters?: AvatarParameters;
  color?: 'primary' | 'accent';
  sideMenuParameters?: SidemenuParameters;
}
