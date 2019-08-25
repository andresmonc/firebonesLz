import { Component, OnInit, HostListener } from '@angular/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../../services/window.service";
import { ScrollToAnimationEasing, ScrollToOffsetMap } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-what-is-firebones',
  templateUrl: './what-is-firebones.component.html',
  styleUrls: ['./what-is-firebones.component.scss']
})
export class WhatIsFirebonesComponent implements OnInit {
  private whatIsGoShowPoint: number;
  public whatIsGoShowFade: boolean = false;
  public ngxScrollToDestination: string;
  public ngxScrollToDuration: number;
  public ngxScrollToEasing: ScrollToAnimationEasing;
  public ngxScrollToOffset: number;
  public ngxScrollToOffsetMap: ScrollToOffsetMap;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ){

    this.ngxScrollToDuration = 0;

    this.ngxScrollToOffsetMap = new Map();
    this.ngxScrollToOffsetMap
      .set(320, -200)
      .set(480, -250)
      .set(768, -300)
      .set(1240, -300)
      .set(1920, -300)

   }

  ngOnInit() {
    this.whatIsGoShowPoint = 30    
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {


    let number = this.window.pageYOffset || this.document.documentElement.offsetTop || this.document.body.scrollTop || 0;
    if (number >= this.whatIsGoShowPoint) {
      console.log("its truez")
      this.whatIsGoShowFade = true;
    }

  }


}
