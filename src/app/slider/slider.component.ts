import {Component} from '@angular/core';

import {SwiperOptions} from 'swiper';
import {SLIDER_CONTENT} from '../content';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  slideData = SLIDER_CONTENT;

  config: SwiperOptions = {
    direction: 'vertical',
    pagination: {el: '.swiper-pagination', clickable: true},
    autoHeight: true,
    allowTouchMove: true,
    speed: 600,
    parallax: true,
  };
}
