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

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > 100) {
      this.navIsFixed = true;
      console.log("hey hey hey")
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
      console.log("hey")
    }
  }

}
