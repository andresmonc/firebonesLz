import { Component, OnInit } from '@angular/core';
import { apiReturnService } from '../../services/API.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  constructor(private apiservice: apiReturnService) { }

  ngOnInit() {
   // this.sendEmail('THISISATEST@gmail.cdlafoda'); //sample
  }

  sendEmail(email) {
    this.apiservice.postSubscribe(email).subscribe((res) => {
      console.log(res.statusCode);
    });
  }

}
