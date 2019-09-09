import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-narrative',
  templateUrl: './narrative.component.html',
  styleUrls: ['./narrative.component.css'],
  animations: [
    trigger('fadeIn', [
      state('show', style({
        opacity: 1,
      })),
      state('hide',   style({
        opacity: 0,
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('600ms ease-in'))
    ])
  ]
})
export class NarrativeComponent implements OnInit {
  state = 'hide'
  constructor(public el: ElementRef ) { }

  ngOnInit() {
  }

  @HostListener("window:scroll", ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop - 700
    const scrollPosition = window.pageYOffset
    if (scrollPosition >= componentPosition) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }
  }

}
