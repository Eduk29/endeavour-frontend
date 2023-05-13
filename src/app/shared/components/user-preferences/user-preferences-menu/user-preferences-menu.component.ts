import { Component, Input } from '@angular/core';
import { IUserPreferencesParameters } from '../model/user-preferences-parameters.model';
import { IMenuActionButton } from 'src/app/shared/model/menu-action-button.model';

@Component({
  selector: 'edv-user-preferences-menu',
  templateUrl: './user-preferences-menu.component.html',
  styleUrls: ['./user-preferences-menu.component.scss'],
})
export class UserPreferencesMenuComponent {
  @Input() userPreferencesParameters!: IUserPreferencesParameters;

  public clickAction(button: IMenuActionButton) {
    if (button.action) {
      return button.action();
    }
    return;
  }

  public isCustomType(button: IMenuActionButton): boolean {
    return button.type === 'custom';
  }

  public get fullname(): string | undefined {
    return this.userPreferencesParameters.fullname;
  }

  public get menuButtons(): IMenuActionButton[] {
    return this.userPreferencesParameters.actionButtons || [];
  }

  public get username(): string | undefined {
    return this.userPreferencesParameters.username;
  }
}
