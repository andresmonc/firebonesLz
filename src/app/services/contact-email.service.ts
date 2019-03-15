import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactEmailService {

  constructor(private http: HttpClient) { }


  //private serverAPI = "http://localhost:4200/"
  private serverAPI = "https://t2cxbnod53.execute-api.us-east-1.amazonaws.com/default/fireBonesContactUs"


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
