import { Component } from '@angular/core';
import {FOOTER_CONTENT, SOCIALS_CONTENT} from '../content';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerContent = FOOTER_CONTENT;
  socials = SOCIALS_CONTENT;
}
