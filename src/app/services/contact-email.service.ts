import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { contactInfo } from '../models/contactinfo.model';
import { map } from 'rxjs/operators'
import { Body } from '@angular/http/src/body';

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {

  constructor(private http: HttpClient) { }


  // private serverAPI = "https://t2cxbnod53.execute-api.us-east-1.amazonaws.com/default/fireBonesContactUs"
  private serverAPI = "https://75d690e8-1fb1-4482-b4f7-6b04af4c31f7.mock.pstmn.io/wee"
  private body = {
    "body": {
      "name": "Biggs Mcgee",
      "email": "farhan.t.islam",
      "message": "I like this idea"
    }
  }


  public postContact() {
    console.log(this.http.post(this.serverAPI, this.body))
    return this.http.post(this.serverAPI, this.body);
  }
}
