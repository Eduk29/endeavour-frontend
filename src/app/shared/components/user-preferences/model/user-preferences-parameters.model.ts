import { MenuActionButton } from 'src/app/shared/model/menu-action-button.model';
import { AvatarParameters } from '../../avatar/model/avatar-parameters.model';

export interface UserPreferencesParameters {
  actionButtons?: MenuActionButton[];
  avatarParameters?: AvatarParameters;
  displayActionMenu?: boolean;
  displayUserPreferences?: boolean;
  fullname?: string;
  username?: string;
}
