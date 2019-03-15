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




  public postContact(name, email, message) {

    const body = JSON.stringify({
      "body": {
        "name": name,
        "email": email,
        "message": message
      }
    });
    return this.http.post<any[]>(this.serverAPI, body);

  }
}
