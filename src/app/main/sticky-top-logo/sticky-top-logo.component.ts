import { Component, OnInit, HostListener } from '@angular/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../../services/window.service";

@Component({
  selector: 'app-sticky-top-logo',
  templateUrl: './sticky-top-logo.component.html',
  styleUrls: ['./sticky-top-logo.component.css']
})
export class StickyTopLogoComponent implements OnInit {

  constructor(    
  @Inject(DOCUMENT) private document: Document,
  @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
  }



  @HostListener("window:scroll", [])
  onWindowScroll() {

      if (this.document.body.scrollTop > 110 || this.document.documentElement.scrollTop > 110) {
        this.document.getElementById("navbar").style.padding = "0px 10px";
        this.document.getElementById("navbar").style.backgroundColor = "black";
        // this.document.getElementById("bones").style.marginRight = "-36%";
        // this.document.getElementById("fire").style.marginLeft = "-36%";
        this.document.getElementById("navbar").style.color = "white";
        this.document.getElementById("logo").style.fontSize = "25px";
        this.document.getElementById("logo").style.height = "auto";
        this.document.getElementById("logo").style.transform =  'scale(' + (1 - 110 / 250) + ')'
        this.document.getElementById("logo").style.webkitTransition = "all .5s ease";
        this.document.getElementById("logo").style.transition = "all .5s ease";
        
      } else {
        this.document.getElementById("logo").style.transform =  'scale(' + (1 - this.document.documentElement.scrollTop / 250) + ')'
        this.document.getElementById("navbar").style.padding = "10px 10px";
        this.document.getElementById("navbar").style.backgroundColor = "#f1f1f100";
        this.document.getElementById("navbar").style.color = "black";
        this.document.getElementById("logo").style.fontSize = "35px";
        this.document.getElementById("logo").style.height = "auto";
        this.document.getElementById("logo").style.width = "auto";
        this.document.getElementById("logo").style.webkitTransition = "all .5s ease";
        this.document.getElementById("logo").style.transition = "all .5s ease";
        
      }

    }


}
