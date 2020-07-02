import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: '[app-button]',
  template: `
    <svg-icon class="ah-btn__ico"
              *ngIf="iconName"
              aria-hidden="true"
              src="assets/icons/{{iconName}}.svg"></svg-icon>
    <span><ng-content></ng-content></span>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() theme: 'primary' | 'animate' | 'buttonIcon' = 'primary';
  @Input() iconName = '';

  @HostBinding('class.ah-btn--primary')
  get isPrimary(): boolean {
    return this.theme === 'primary';
  }

  @HostBinding('class.ah-btn--animate')
  get isAnimate(): boolean {
    return this.theme === 'animate';
  }

  @HostBinding('class.ah-btn--icon')
  get isIcon(): boolean {
    return this.theme === 'buttonIcon';
  }
}
