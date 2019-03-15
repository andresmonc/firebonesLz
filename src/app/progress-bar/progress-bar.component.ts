import { Component, OnInit, HostListener } from '@angular/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../services/window.service";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  public navIsFixed: boolean = false;
  public section1: boolean = true;
  public section2: boolean = false;
  public section3: boolean = false;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    console.log(Math.round(number))
    if (number < 1271) {
      this.section1 = true;
      this.section2 = false;
      this.section3 = false;
    } else if(number > 1271 && number < 2144) {
      this.section1 = false;
      this.section2 = true;
      this.section3 = false;
    } else if(number > 2144) {
      this.section1 = false;
      this.section2 = false;
      this.section3 = true;
    }
  }

}
