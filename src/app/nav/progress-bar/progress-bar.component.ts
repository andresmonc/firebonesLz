import { Component, OnInit, HostListener } from '@angular/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../../services/window.service";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  private section1: boolean = true;
  private section2: boolean = false;
  private section3: boolean = false;
  private section4: boolean = false;
  private section5: boolean = false;

  private aboutOffset: number;
  private videoOffset: number;
  private audioOffset: number;
  private contactOffset: number;
  private subscribeOffset: number;

  private endOfPage: number;

  private triggerBeforeElem: number = 200;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
    // the - 200 is to trigger 200 pixels before element reaches top
    this.videoOffset = (this.document.getElementById('videoSample').offsetTop) - this.triggerBeforeElem;
    this.audioOffset = (this.document.getElementById('audioSample').offsetTop) - this.triggerBeforeElem;
    this.aboutOffset = (this.document.getElementById('about').offsetTop) - this.triggerBeforeElem;
    this.subscribeOffset = (this.document.getElementById('subscribe').offsetTop) - this.triggerBeforeElem;
    this.contactOffset = (this.document.getElementById('contact').offsetTop) - this.triggerBeforeElem - 200 ;

  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.offsetTop || this.document.body.scrollTop || 0;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    console.log((number));
    console.log(this.endOfPage);
    console.log('about offset: ' + this.aboutOffset)
    console.log('video offset: ' + this.videoOffset)
    console.log('audio offset: ' + this.audioOffset)
    console.log('subscribe offset: ' + this.subscribeOffset)
    console.log('contact offset: ' + this.contactOffset)

    if (number >= this.aboutOffset && number <= this.videoOffset) {
      this.section1 = true;
      this.section2 = false;
      this.section3 = false;
      this.section4 = false;
      this.section5 = false;
      console.log("trigger 1!");
    } else if (number >= this.videoOffset && number <= this.audioOffset) {
      this.section1 = false;
      this.section2 = true;
      this.section3 = false;
      this.section4 = false;
      this.section5 = false;
      console.log('trigger 2!!!');
    } else if (number >= this.audioOffset && number <= this.subscribeOffset) {
      this.section1 = false;
      this.section2 = false;
      this.section3 = true;
      this.section4 = false;
      this.section5 = false;
      console.log('trigger 3!!!');
    }
    else if (number >= this.subscribeOffset && number <= this.contactOffset) {
      this.section1 = false;
      this.section2 = false;
      this.section3 = true;
      this.section4 = false;
      this.section5 = false;
      console.log('trigger 4!!!');
    }
    else if (number >= this.contactOffset) {
      this.section1 = false;
      this.section2 = false;
      this.section3 = true;
      this.section4 = false;
      this.section5 = false;
      console.log('trigger 5!!!');
    }
  }

}
