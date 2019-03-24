import { Component, OnInit, HostListener } from '@angular/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../../services/window.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  private arrowFade: boolean = false;

  private arrowFadepoint: number;

  constructor(    
  @Inject(DOCUMENT) private document: Document,
  @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
    this.arrowFadepoint = 20
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
  
    let number = this.window.pageYOffset || this.document.documentElement.offsetTop || this.document.body.scrollTop || 0;
    console.log("scroll numb",number);
    if (number >=  this.arrowFadepoint ) {
      console.log("arrow fade true")
      this.arrowFade = true;

    }
    else{
      console.log("arrow fade false")
      this.arrowFade = false;
    }

  }

}
