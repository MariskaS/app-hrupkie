import {Component, EventEmitter, Output} from '@angular/core';
import {DONATION_CONTENT} from '../../content';


@Component({
  selector: 'app-donation-check',
  templateUrl: './donation-check.component.html',
  styleUrls: ['./donation-check.component.scss']
})
export class DonationCheckComponent {
  @Output() showForm = new EventEmitter<boolean>();

  donationText = DONATION_CONTENT;

  showDonateForm():void {
    this.showForm.emit(false);
  }
}
