import { IMenuActionButton } from './../../../model/menu-action-button.model';
import { IAvatarParameters } from './../../avatar/model/avatar-parameters.model';

export interface IUserPreferencesParameters {
  actionButtons?: IMenuActionButton[];
  avatarParameters?: IAvatarParameters;
  fullname?: string;
  username?: string;
}
