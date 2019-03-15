import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { WINDOW_PROVIDERS } from "./services/window.service";
import { ContactComponent } from './main/contact/contact.component';


import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AboutComponent } from './main/about/about.component';
import { FooterComponent } from './footer/footer.component';
import { AudioComponent } from './main/audio/audio.component';
import { VideoComponent } from './main/video/video.component';


@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    AudioComponent,
    VideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule, 
    HttpClientModule
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
