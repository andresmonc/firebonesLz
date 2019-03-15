import { Component, OnInit } from '@angular/core';
import { ContactEmailService } from '../../services/contact-email.service'
import { contactInfo } from '../../models/contactinfo.model'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: string;
  email: string;
  message: string;

  public contactinfo: Array<contactInfo>;
  constructor(private contactServ: ContactEmailService) { }

  ngOnInit() {
    //this.sendEmail("Jaime Moncayo","jaimeamonc@gmail.com","hey how do you do"); //a sample function call
  }


  sendEmail() {
    this.contactServ.postContact(this.name,this.email,this.message).subscribe((res) => {
      this.contactinfo = res;
      console.log(res); 
    });
  }


}
