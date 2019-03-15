import { Component, OnInit } from '@angular/core';
import { ContactEmailService } from '../services/contact-email.service'
import { contactInfo } from '../models/contactinfo.model'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contactinfo: Array<contactInfo>;
  constructor(private contactServ: ContactEmailService) { }
  public contactInfo: contactInfo[];
  ngOnInit() {
    this.contactServ.postContact().subscribe((res) => {
      this.contactinfo = res;
      console.log(res);
    });
  }


  postEmail


}
