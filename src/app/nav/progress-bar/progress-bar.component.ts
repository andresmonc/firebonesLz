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

  public section1: boolean = false;
  public section2: boolean = false;
  public section3: boolean = false;
  public section4: boolean = false;
  public section5: boolean = false;
  public section6: boolean = false;


  private aboutOffset: number;
  private whatIsOffset: number;
  private videoOffset: number;
  private audioOffset: number;
  private contactOffset: number;
  private subscribeOffset: number;


  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
    this.aboutOffset = (this.document.getElementById('about').offsetTop);
    this.whatIsOffset = (this.document.getElementById('whatIsFireBones').offsetTop);
    this.audioOffset = (this.document.getElementById('audioSection').offsetTop);
    this.videoOffset = (this.document.getElementById('videoSection').offsetTop + 100);
    this.subscribeOffset = (this.document.getElementById('subscribe').offsetTop);
    this.contactOffset = (this.document.getElementById('contact').offsetTop);
    this.activeDot()
  }

  activeDot() {
    let number = this.window.pageYOffset || this.document.documentElement.offsetTop || this.document.body.scrollTop || 0;
    if (number <= this.aboutOffset) {
      this.section6 = false;
      this.section1 = true;
      this.section2 = false;
    } else if (number <= this.whatIsOffset) {
      this.section1 = false;
      this.section2 = true;
      this.section3 = false;
    } else if (number <= this.audioOffset) {
      this.section2 = false;
      this.section3 = true;
      this.section4 = false;
    } else if (number <= this.videoOffset) {
      this.section3 = false;
      this.section4 = true;
      this.section5 = false;
    } else if (number <= this.subscribeOffset) {
      this.section4 = false;
      this.section5 = true;
      this.section6 = false;
    } else if (number > this.subscribeOffset) {
      this.section5 = false;
      this.section6 = true;
      this.section1 = false;
    }
  }


  @HostListener("window:scroll", [])
  onWindowScroll() {
    this.activeDot()
  }
}
