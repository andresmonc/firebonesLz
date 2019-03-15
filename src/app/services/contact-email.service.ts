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


  private serverAPI = "http://localhost:4200/"
  // private serverAPI = "https://t2cxbnod53.execute-api.us-east-1.amazonaws.com/default/fireBonesContactUs"
  private body = JSON.stringify({
    "body": {
      "name": "Biggs Mcgee",
      "email": "farhan.t.islam",
      "message": "I like this idea"
    }
  });

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  public postContact() {
    return this.http.post<any[]>(this.serverAPI, this.body, this.options);
  }
}
