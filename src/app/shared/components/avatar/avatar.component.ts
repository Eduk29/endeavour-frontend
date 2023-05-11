import { Component, Input } from '@angular/core';

import { AvatarParameters } from './model/avatar-parameters.model';

@Component({
  selector: 'edv-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  @Input() avatarParameters!: AvatarParameters;

  public get displayMode(): string {
    return this.avatarParameters.displayerMode || 'text';
  }

  public get iconName(): string {
    return this.avatarParameters.iconName || 'menu';
  }

  public set label(newLabel: string | undefined) {
    this.avatarParameters.label = newLabel;
  }

  public get label(): string | undefined {
    return this.avatarParameters.label;
  }

  public get displayIconMode(): boolean {
    return !!this.avatarParameters.displayerMode && this.avatarParameters.displayerMode === 'icon' && !!this.iconName;
  }

  public get displayTextMode(): boolean {
    return !!this.avatarParameters.displayerMode && this.avatarParameters.displayerMode === 'text' && !!this.label;
  }
}
