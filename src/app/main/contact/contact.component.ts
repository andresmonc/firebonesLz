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

  public name: string = "";
  public email: string = "";
  public message: string = "";
  public formSubmitted: boolean = false;
  public formSuccess: boolean = false;
  public validName: boolean = false;
  public validEmail: boolean = false;
  public validMessage: boolean = false;


  constructor(
    private apiservice: apiReturnService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit(

  ) {

  }


  sendEmail() {
    if (this.formSubmitted == false && this.validEmail && this.validMessage && this.validName) {
      this.formSubmitted = true;
      this.apiservice.postContact(this.name, this.email, this.message).subscribe((res) => {
        console.log(this.formSubmitted)
        console.log(res);
        if (res.statusCode == 200) {
          this.formSuccess = true;
        } else if (res.statusCode != 200) {
          this.formSubmitted = false;
        }
      })
    };
  }

  @HostListener('keydown') onKeydown() {
    if (this.email.length > 0 && this.email.match('@') && this.email.match('\\.')) {
      this.validEmail = true;
    } else {
      this.validEmail = false;
    }
    if (this.name.length > 0 && this.name.length <= 2) {
      this.validName = false;
    } else {
      this.validName = true;
    }
    if (this.message.length > 0 && this.message.length <= 10) {
      this.validMessage = false;
    } else {
      this.validMessage = true;
    }
  }

}
