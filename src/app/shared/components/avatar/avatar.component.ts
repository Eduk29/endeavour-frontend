import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { IAvatarParameters } from './model/avatar-parameters.model';
import { DEFAULT_AVATAR_CONFIGURATIONS } from './configurations/default-avatar.configuration';

@Component({
  selector: 'edv-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnChanges {
  @Input() avatarParameters?: IAvatarParameters;

  ngOnChanges(): void {
    if (!this.avatarParameters) {
      this.avatarParameters = DEFAULT_AVATAR_CONFIGURATIONS;
    }
  }

  public get displayMode(): string {
    return this.avatarParameters?.displayerMode || 'text';
  }

  public get iconName(): string {
    return this.avatarParameters?.iconName || 'person';
  }

  public set label(newLabel: string | undefined) {
    if (this.avatarParameters) {
      this.avatarParameters.label = newLabel || '';
    }
  }

  public get label(): string | undefined {
    return this.avatarParameters?.label;
  }

  public get displayIconMode(): boolean {
    return !!this.avatarParameters?.displayerMode && this.avatarParameters?.displayerMode === 'icon' && !!this.iconName;
  }

  public get displayTextMode(): boolean {
    return !!this.avatarParameters?.displayerMode && this.avatarParameters?.displayerMode === 'text' && !!this.label;
  }
}
