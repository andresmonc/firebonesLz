import { Component, OnInit, HostListener, ElementRef} from '@angular/core';
import { debounce } from "../../decoraters";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeUpUp', [
      state('show', style({
        opacity: 1,
        transform: "none"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translate3d(0, 100%, 0)"
      })),
      transition('show => hide', animate('400ms ease-out')),
      transition('hide => show', animate('400ms ease-in'))
    ]),
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
export class AboutComponent implements OnInit {

  state = 'hide'

  constructor(
    public el: ElementRef
  ) {}


  ngOnInit() {
  }

  @HostListener("window:scroll", ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop - 500
    const scrollPosition = window.pageYOffset
    console.log(componentPosition)
    if (scrollPosition >= componentPosition) {
      this.state = 'show'
    } else {
      this.state = 'hide'
    }
  }


}
