import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { UserPreferencesParameters } from './model/user-preferences-parameters.model';
import { AvatarParameters } from '../avatar/model/avatar-parameters.model';
import { MenuActionButton } from '../../model/menu-action-button.model';

@Component({
  selector: 'edv-user-preferences',
  templateUrl: './user-preferences.component.html',
  styleUrls: ['./user-preferences.component.scss'],
})
export class UserPreferencesComponent implements OnChanges {
  @Input() userPreferencesParameters!: UserPreferencesParameters;

  ngOnChanges(): void {
    if (!!this.avatarParameters && this.avatarParameters?.displayerMode === 'text' && this.avatarParameters.label === undefined) {
      this.avatarParameters = { ...this.avatarParameters, label: this.convertFullnameToInitials() };
    }
  }

  private convertFullnameToInitials(): string {
    const firstLetter = this.fullname?.charAt(0);
    const lastLetter = this.fullname?.charAt(this.fullname?.lastIndexOf(' ') + 1);
    return `${firstLetter}${lastLetter}`;
  }

  public get avatarParameters(): AvatarParameters | undefined {
    return this.userPreferencesParameters.avatarParameters;
  }

  public set avatarParameters(newAvatarParameters: AvatarParameters | undefined) {
    this.userPreferencesParameters.avatarParameters = newAvatarParameters;
  }

  public get displayActionMenu(): boolean {
    return this.userPreferencesParameters.displayActionMenu || false;
  }

  public get displayUserpreferences(): boolean {
    return this.userPreferencesParameters.displayUserPreferences || false;
  }

  public get fullname(): string | undefined {
    return this.userPreferencesParameters.fullname;
  }

  public get menuHasDisplayableButton(): boolean {
    const displayableButton =
      this.userPreferencesParameters.actionButtons?.filter((button: MenuActionButton) => button.displayButton === true) || [];

    return displayableButton.length > 0;
  }

  public get username(): string | undefined {
    return this.userPreferencesParameters.username;
  }
}
