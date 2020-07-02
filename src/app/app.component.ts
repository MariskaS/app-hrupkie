import {Component} from '@angular/core';
import {SwiperOptions} from "swiper";
import {SLIDER_CONTENT} from "./content";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  slideData = SLIDER_CONTENT;

  config: SwiperOptions = {
    direction: 'vertical',
    pagination: {el: '.swiper-pagination', clickable: true},
    autoHeight: true,
    allowTouchMove: true,
    speed: 600,
    parallax:true,
  };
}
