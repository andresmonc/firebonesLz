import { Component, OnInit, HostListener } from '@angular/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../../services/window.service";
import { ScrollService } from "../../services/scroll-service.service";


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public arrowFade: boolean = false;

  private arrowFadepoint: number;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
    private scrollservice: ScrollService
  ) { }

  ngOnInit() {
    this.arrowFadepoint = 20
    // this.scrollservice.scroll
    
  }


  scroll2(el) {
    console.log(el)
    let element = this.document.getElementById(el);
    element.scrollIntoView();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {

    let number = this.window.pageYOffset || this.document.documentElement.offsetTop || this.document.body.scrollTop || 0;
    if (number >= this.arrowFadepoint) {
      this.arrowFade = true;
    }
    else {
      this.arrowFade = false;
    }

  }


  

}
