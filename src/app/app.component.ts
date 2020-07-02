import {Component} from '@angular/core';
import {DONATION_CONTENT} from './content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  donationContent = DONATION_CONTENT;
  public isOpenSidebar = false;

  toggleSidebar(): void {
    this.isOpenSidebar = !this.isOpenSidebar;
  }

  closeSidebar(): void {
    this.isOpenSidebar = false;
  }
}
