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

  public loadBar: boolean = false;
  private triggerBeforeElem: number = 0;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
    this.videoOffset = (this.document.getElementById('videoSection').offsetTop) - this.triggerBeforeElem;
    this.audioOffset = (this.document.getElementById('audioSection').offsetTop) - this.triggerBeforeElem;
    this.aboutOffset = (this.document.getElementById('about').offsetTop) - this.triggerBeforeElem;
    this.subscribeOffset = (this.document.getElementById('subscribe').offsetTop) - 500;
    this.contactOffset = (this.document.getElementById('contact').offsetTop) - 500;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    console.log(this.subscribeOffset)
    let number = this.window.pageYOffset || this.document.documentElement.offsetTop || this.document.body.scrollTop || 0;
    console.log("current scroll Pos: "+ number)
    if (number >= this.aboutOffset && number <= this.videoOffset) {
      this.section1 = true;
      this.section2 = false;
      this.section3 = false;
      this.section4 = false;
      this.section5 = false;
    } else if (number >= this.videoOffset && number <= this.audioOffset) {
      this.section1 = false;
      this.section2 = true;
      this.section3 = false;
      this.section4 = false;
      this.section5 = false;
      this.loadBar = true;
    } else if (number >= this.audioOffset && number <= this.subscribeOffset) {
      this.section1 = false;
      this.section2 = false;
      this.section3 = true;
      this.section4 = false;
      this.section5 = false;
      this.loadBar = true;
    }
    else if (number >= this.subscribeOffset && number <= this.contactOffset) {
      this.section1 = false;
      this.section2 = false;
      this.section3 = false;
      this.section4 = true;
      this.section5 = false;
      this.loadBar = true;
    }
    else if (number >= this.contactOffset) {
      this.section1 = false;
      this.section2 = false;
      this.section3 = false;
      this.section4 = false;
      this.section5 = true;
      this.loadBar = true;
    }
  }

}
