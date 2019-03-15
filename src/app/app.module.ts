import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { WINDOW_PROVIDERS } from "./services/window.service";

@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
