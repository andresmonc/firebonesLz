import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './nav/progress-bar/progress-bar.component';
import { WINDOW_PROVIDERS } from "./services/window.service";
import { ContactComponent } from './main/contact/contact.component';
import {NgsRevealModule} from 'ng-scrollreveal';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './main/about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AudioComponent } from './main/audio/audio.component';
import { VideoComponent } from './main/video/video.component';
import { SubscribeComponent } from './main/subscribe/subscribe.component';
import { StickyTopLogoComponent } from './main/sticky-top-logo/sticky-top-logo.component';
import { WhatIsFirebonesComponent } from './main/what-is-firebones/what-is-firebones.component';
import { NarrativeComponent } from './main//narrative/narrative.component';
import { PromoVideoComponent } from './main/promo-video/promo-video.component';
import { SplashVideoComponent } from './main/splash-video/splash-video.component';




@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    AudioComponent,
    VideoComponent,
    SubscribeComponent,
    StickyTopLogoComponent,
    WhatIsFirebonesComponent,
    NarrativeComponent,
    PromoVideoComponent,
    SplashVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule, 
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollToModule.forRoot(),
    NgsRevealModule.forRoot()
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
