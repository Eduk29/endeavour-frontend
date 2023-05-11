import { NavbarParameters } from '../../shared/components/navbar/model/navbar-parameters.models';

export const homeNavbarConfiguration: NavbarParameters = {
  applicationNameParameters: {
    applicationName: 'Endeavour',
    ariaLabel: 'Endeavour Application',
    displayApplicationName: true,
  },
  color: 'primary',
  userPreferencesParameters: {
    actionButtons: [
      { color: undefined, label: 'Profile', iconName: 'account_circle', type: 'router', routerLink: ['..', 'profile'] },
      { color: undefined, label: 'Log Out', iconName: 'logout', type: 'logout' },
    ],
    avatarParameters: {
      displayerMode: 'text',
      iconName: 'person',
    },
    displayActionMenu: true,
    displayUserPreferences: true,
    fullname: 'Sarah De Villio',
    username: 'svillio',
  },
};
