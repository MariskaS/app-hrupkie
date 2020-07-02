import {Component} from '@angular/core';

import {DONATION_CONTENT} from '../content';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})
export class DonationComponent {
  donationText = DONATION_CONTENT;

  isSuccessfulPayment: boolean;

  successfulPaymentNotify($event: boolean): void {
    this.isSuccessfulPayment = $event;
  }

  showForm($event: boolean): void {
    this.isSuccessfulPayment = $event;
  }

}
