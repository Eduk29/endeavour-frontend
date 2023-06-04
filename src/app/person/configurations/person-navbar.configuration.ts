import { INavbarParameters } from '../../shared/components/navbar/model/navbar-parameters.models';

export const personNavbarConfiguration: INavbarParameters = {
  applicationNameParameters: {
    applicationName: 'Endeavour',
    ariaLabel: 'Endeavour Application',
    displayApplicationName: true,
  },
  color: 'primary',
  userPreferencesParameters: {
    actionButtons: [
      {
        color: undefined,
        displayButton: false,
        label: 'Profile',
        iconName: 'account_circle',
        routerLink: ['..', 'profile'],
        type: 'router',
      },
      { color: undefined, displayButton: true, label: 'Log Out', iconName: 'logout', type: 'logout' },
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
