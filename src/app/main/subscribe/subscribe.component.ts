import { Component, OnInit, HostListener } from '@angular/core';
import { apiReturnService } from '../../services/API.service';
import { Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../../services/window.service";

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  private formSubmitted: boolean = false;
  public formSuccess: boolean = false;
  private email: string = "";
  public validEmail: boolean = false;

  constructor(
    private apiservice: apiReturnService,
    @Inject(DOCUMENT) private document: Document,
    @Inject(WINDOW) private window: Window
  ) { }

  ngOnInit() {

  }

  subscribe(email) {
    if (this.validEmail && this.formSubmitted == false) {
      this.formSubmitted = true;
      this.apiservice.postSubscribe(this.email).subscribe((res) => {
        this.formSubmitted = true;
        console.log(this.formSubmitted)
        console.log(res);
        if (res.statusCode == 200) {
          this.formSuccess = true;
        } else if (res.statusCode != 200) {
          this.formSubmitted = false;
        }
      });
    }
  }

  @HostListener('keydown') onKeydown() {
    if (this.email.length > 0 && this.email.match('@') && this.email.match('\\.')) {
      this.validEmail = true;
      console.log('yo')
    } else {
      this.validEmail = false;
      console.log('yo2')
    }
  }

}
