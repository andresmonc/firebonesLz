import { Injectable } from '@angular/core';
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../services/window.service";
import { Inject } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window,
  ) { }



  scroll(el) {
    let element = this.document.getElementById(el);
    element.scrollIntoView();
  }

  test () {
    console.log('service triggered')
  }

}
