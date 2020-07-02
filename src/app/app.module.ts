import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {reducers, metaReducers} from './store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {StoreModule} from '@ngrx/store';
import {StoreRouterConnectingModule} from '@ngrx/router-store';

import {AngularSvgIconModule} from 'angular-svg-icon';

import {AppComponent} from './app.component';
import {DonationCheckComponent} from './donation/donation-check/donation-check.component';
import {DonationComponent} from './donation/donation.component';
import {DonationFormComponent} from './donation/donation-form/donation-form.component';
import {FooterComponent} from './footer/footer.component';
import {SliderComponent} from './slider/slider.component';
import {AppRoutingModule} from './app-routing.module';
import {SidebarComponent} from './shared/components/sidebar/sidebar.component';
import {ButtonComponent} from './shared/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    DonationCheckComponent,
    DonationComponent,
    DonationFormComponent,
    FooterComponent,
    SliderComponent,
    SidebarComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    NgxUsefulSwiperModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularSvgIconModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    StoreRouterConnectingModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
