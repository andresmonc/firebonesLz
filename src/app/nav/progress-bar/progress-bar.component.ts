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

  private aboutOffset: number
  private videoOffset: number;
  private audioOffset: number;


  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() { 
    this.videoOffset = (this.document.getElementById('videoSample').offsetTop);
    this.audioOffset = (this.document.getElementById('audioSample').offsetTop);
    this.aboutOffset = (this.document.getElementById('about').offsetTop);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    console.log("Current scroll Pos:" + Math.round(number));
    console.log('about offset: ' + this.aboutOffset)
    console.log('audio offset: ' + this.audioOffset)
    console.log('video offset: ' + this.videoOffset)
    console.log('about offset: ' + this.aboutOffset)
    console.log('contact offset: ' + this.aboutOffset)
    // console.log(number - videoOffset)
    if (number == this.videoOffset -200) {
      this.section1 = true;
      this.section2 = false;
      this.section3 = false;
      this.section4 = false;
      this.section5 = false;
    }
    if (number == this.videoOffset -200) {
      this.section1 = true;
      this.section2 = false;
      this.section3 = false;
      this.section4 = false;
      this.section5 = false;
    }
  }

}
