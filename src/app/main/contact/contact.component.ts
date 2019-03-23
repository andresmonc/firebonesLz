import { Component, OnInit } from '@angular/core';
import { apiReturnService } from '../../services/API.service';

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

  constructor(private apiservice: apiReturnService) { }

  ngOnInit() {

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

}
