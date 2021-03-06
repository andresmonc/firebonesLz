import { Component, OnInit, HostListener } from '@angular/core';
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../../services/window.service";

@Component({
  selector: 'app-sticky-top-logo',
  templateUrl: './sticky-top-logo.component.html',
  styleUrls: ['./sticky-top-logo.component.scss']
})
export class StickyTopLogoComponent implements OnInit {

  public bringTextCloser: boolean = false;

  constructor(    
  @Inject(DOCUMENT) private document: Document,
  @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {
  }



  @HostListener("window:scroll", [])
  onWindowScroll() {

    if(this.document.body.clientWidth < 399) {

      if (this.document.body.scrollTop > 110 || this.document.documentElement.scrollTop > 110) {
        this.bringTextCloser = true;
        this.document.getElementById("navbar").style.padding = "0px 10px";
        this.document.getElementById("navbar").style.height = "130px";
        this.document.getElementById("navbar").style.top = "-2%";
        this.document.getElementById("navbar").style.backgroundColor = "black";
        this.document.getElementById("navbar").style.color = "#f9dfbe";
        this.document.getElementById("logo").style.height = "auto";
        this.document.getElementById("logo").style.transform =  'scale(' + (1 - 110 / 250) + ')'
        this.document.getElementById("logo").style.webkitTransition = "all .5s ease";
        this.document.getElementById("logo").style.transition = "all .5s ease";
        this.document.getElementsByClassName("")
        
      } else {
        this.bringTextCloser = false;
        this.document.getElementById("navbar").style.height = "auto";
        this.document.getElementById("logo").style.transform =  'scale(' + (1 - this.document.documentElement.scrollTop / 250) + ')'
        this.document.getElementById("navbar").style.padding = "10px 10px";
        this.document.getElementById("navbar").style.top = "0";
        this.document.getElementById("navbar").style.backgroundColor = "#f1f1f100";
        this.document.getElementById("navbar").style.color = "white";
        this.document.getElementById("logo").style.height = "auto";
        this.document.getElementById("logo").style.width = "120px";
        this.document.getElementById("logo").style.webkitTransition = "all .5s ease";
        this.document.getElementById("logo").style.transition = "all .5s ease";
        
      }

    } 

    else if(this.document.body.clientWidth < 900 && this.document.body.clientWidth > 400) {

      if (this.document.body.scrollTop > 110 || this.document.documentElement.scrollTop > 110) {
        this.bringTextCloser = true;
        this.document.getElementById("navbar").style.padding = "0px 10px";
        this.document.getElementById("navbar").style.height = "165px";
        this.document.getElementById("navbar").style.top = "-2%";
        this.document.getElementById("navbar").style.backgroundColor = "black";
        this.document.getElementById("navbar").style.color = "#f9dfbe";
        this.document.getElementById("logo").style.height = "auto";
        this.document.getElementById("logo").style.transform =  'scale(' + (1 - 110 / 250) + ')'
        this.document.getElementById("logo").style.webkitTransition = "all .5s ease";
        this.document.getElementById("logo").style.transition = "all .5s ease";
        
      } else {
        this.bringTextCloser = false;
        this.document.getElementById("navbar").style.height = "auto";
        this.document.getElementById("logo").style.transform =  'scale(' + (1 - this.document.documentElement.scrollTop / 250) + ')'
        this.document.getElementById("navbar").style.padding = "10px 10px";
        this.document.getElementById("navbar").style.top = "0";
        this.document.getElementById("navbar").style.backgroundColor = "#f1f1f100";
        this.document.getElementById("navbar").style.color = "white";
        this.document.getElementById("logo").style.height = "auto";
        this.document.getElementById("logo").style.width = "165px";
        this.document.getElementById("logo").style.webkitTransition = "all .5s ease";
        this.document.getElementById("logo").style.transition = "all .5s ease";
        
      }

    } 
    
    
    
    else {
      if (this.document.body.scrollTop > 110 || this.document.documentElement.scrollTop > 110) {
        this.bringTextCloser = true;
        this.document.getElementById("navbar").style.padding = "0px 10px";
        this.document.getElementById("navbar").style.height = "265px";
        this.document.getElementById("navbar").style.top = "-6%";
        this.document.getElementById("navbar").style.backgroundColor = "black";
        this.document.getElementById("navbar").style.color = "#f9dfbe";
        this.document.getElementById("logo").style.height = "auto";
        this.document.getElementById("logo").style.transform =  'scale(' + (1 - 110 / 250) + ')'
        this.document.getElementById("logo").style.webkitTransition = "all .5s ease";
        this.document.getElementById("logo").style.transition = "all .5s ease";
        
      } else {
        this.bringTextCloser = false;
        this.document.getElementById("navbar").style.height = "auto";
        this.document.getElementById("logo").style.transform =  'scale(' + (1 - this.document.documentElement.scrollTop / 250) + ')'
        this.document.getElementById("navbar").style.padding = "10px 10px";
        this.document.getElementById("navbar").style.top = "0";
        this.document.getElementById("navbar").style.backgroundColor = "#f1f1f100";
        this.document.getElementById("navbar").style.color = "white";
        this.document.getElementById("logo").style.height = "auto";
        this.document.getElementById("logo").style.width = "auto";
        this.document.getElementById("logo").style.webkitTransition = "all .5s ease";
        this.document.getElementById("logo").style.transition = "all .5s ease";
        
      }
    }



    }


}
