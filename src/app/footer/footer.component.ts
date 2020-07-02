import { Component, OnInit } from '@angular/core';

import {FOOTER_CONTENT, SOCIALS_CONTENT} from "../content";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footerText = FOOTER_CONTENT;
  socials = SOCIALS_CONTENT

  constructor() { }

  ngOnInit(): void {
  }

}
