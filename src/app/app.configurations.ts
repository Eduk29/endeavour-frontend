import { INavbarParameters } from './shared/components/navbar/model/navbar-parameters.models';

export const APPLICATION_NAVBAR_PARAMETERS: INavbarParameters = {
  applicationNameParameters: {
    applicationName: 'Endeavour',
    ariaLabel: 'Endeavour Application',
    displayApplicationName: true,
  },
  userPreferencesParameters: {
    actionButtons: [{ color: undefined, displayButton: true, label: 'Log Out', iconName: 'logout', type: 'logout' }],
    displayActionMenu: true,
  },
};
