import { Component, OnInit, HostListener } from '@angular/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../../services/window.service";

@Component({
  selector: 'app-sticky-top-logo',
  templateUrl: './sticky-top-logo.component.html',
  styleUrls: ['./sticky-top-logo.component.css']
})
export class StickyTopLogoComponent implements OnInit {

  constructor(    
  @Inject(DOCUMENT) private document: Document,
  @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
  }



  @HostListener("window:scroll", [])
  onWindowScroll() {
      if (this.document.body.scrollTop > 80 || this.document.documentElement.scrollTop > 80) {
        this.document.getElementById("navbar").style.padding = "30px 10px";
      } else {
        this.document.getElementById("navbar").style.padding = "80px 10px";
      }
    }


}
