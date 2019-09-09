import { Component, OnInit, ViewChild, HostListener, Inject} from '@angular/core';
import { DomSanitizer, DOCUMENT  } from "@angular/platform-browser";
import { WINDOW } from "../../services/window.service";
import { ScrollToAnimationEasing, ScrollToOffsetMap } from '@nicky-lenaers/ngx-scroll-to';


@Component({
  selector: 'app-splash-video',
  templateUrl: './splash-video.component.html',
  styleUrls: ['./splash-video.component.less']
})
export class SplashVideoComponent implements OnInit {
  public arrowFade: boolean = false;

  public ngxScrollToDestination: string;
  public ngxScrollToDuration: number;
  public ngxScrollToEasing: ScrollToAnimationEasing;
  public ngxScrollToOffset: number;
  public ngxScrollToOffsetMap: ScrollToOffsetMap;

  private arrowFadepoint: number;


  videoTag;

  constructor(private sanitizer: DomSanitizer,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
    ) { 

      this.ngxScrollToDuration = 0;

      this.ngxScrollToOffsetMap = new Map();
      this.ngxScrollToOffsetMap
        .set(320, -180)
        .set(480, -250)
        .set(768, -300)
        .set(1240, -300)
        .set(1920, -300)

      this.videoTag = this.getVideoTag();

  }

  private getVideoTag() {
    return this.sanitizer.bypassSecurityTrustHtml(
      `    <video preload="auto" autoplay muted loop id="myVideo" #myVideo>
        <source src="https://firebones-lz.s3-us-west-1.amazonaws.com/firebonesSplashVid.mp4" type="video/mp4">
        <source src=" https://d16tvh09ko4c53.cloudfront.net/splashVid.webm" type="video/webm">
        <source src=" https://d16tvh09ko4c53.cloudfront.net/firebonesSplashVid.ogv" type="video/ogv">
        Browser not supported
      </video>`
    );
  }

  ngOnInit() {
    this.arrowFadepoint = 20   
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
