import { Component, OnInit } from '@angular/core';
import { apiReturnService } from '../../services/API.service';


@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  private formSubmitted: boolean = false;
  private formSuccess: boolean = false;
  private email: string;


  constructor(private apiservice: apiReturnService) { }

  ngOnInit() {

  }

  subscribe(email) {
    this.apiservice.postSubscribe(this.email).subscribe((res) => {
      this.formSubmitted = true;
      console.log(this.formSubmitted)
      console.log(res);
      if (res.statusCode == 200) {
        this.formSuccess = true;
      }
    });
  }

}
