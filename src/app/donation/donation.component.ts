import {Component} from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html'
})
export class DonationComponent {
  isSuccessfulPayment: boolean;

  successfulPaymentNotify($event: boolean): void {
    this.isSuccessfulPayment = $event;
  }

  showForm($event: boolean): void {
    this.isSuccessfulPayment = $event;
  }

}
