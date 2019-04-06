import { Component, OnInit, HostListener } from '@angular/core';
import { Inject } from "@angular/core";
import { apiReturnService } from '../../services/API.service';
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../../services/window.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string = "";
  email: string = "";
  message: string = "";
  formSubmitted: boolean = false;
  formSuccess: boolean = false;

  constructor(
    private apiservice: apiReturnService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit(

  ) {

  }


  sendEmail() {
    this.apiservice.postContact(this.name, this.email, this.message).subscribe((res) => {
      this.formSubmitted = true;
      console.log(this.formSubmitted)
      console.log(res);
      if (res.statusCode == 200) {
        this.formSuccess = true;
      }
    });
  }

  @HostListener('keydown') onKeydown() {
    if (this.name.length > 0) {
      if (this.name.length >= 2) {
        console.log('Name Valid')
      }
    }
    if (this.email.length > 0) {
      if (this.email.match('@') && this.email.match('\\.')) {
        console.log('Email valid')
      }
    }
    if (this.message.length > 0) {
      if(this.message.length >= 10) {
        console.log('Message valid')
      }
    }
  }

}
