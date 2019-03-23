import { Component, OnInit } from '@angular/core';
import { ContactEmailService } from '../../services/API.service'
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
  formSubmitted: boolean = false;
  formSuccess: boolean = false;

  constructor(private contactServ: ContactEmailService) { }

  ngOnInit() {
    //this.sendEmail("Jaime Moncayo","jaimeamonc@gmail.com","hey how do you do"); //a sample function call
  }


  sendEmail() {
    this.contactServ.postContact(this.name,this.email,this.message).subscribe((res) => {
      this.formSubmitted = true; 
      console.log(this.formSubmitted)
      console.log(res); 
      if(res.statusCode == 200){
        this.formSuccess = true;
      }
    });
  }


}
