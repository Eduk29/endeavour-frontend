export interface IMenuActionButton {
  action?: () => void;
  color?: 'primary' | 'accent';
  displayButton?: boolean | (() => boolean);
  iconName?: string;
  label?: string;
  routerLink?: string[];
  type?: 'logout' | 'login' | 'router' | 'custom';
}
