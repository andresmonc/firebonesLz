import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiReturn } from "../models/apiReturn"

@Injectable({
  providedIn: 'root'
})
export class apiReturnService {

  constructor(private http: HttpClient) { }


  //private serverAPI = "http://localhost:4200/"
  private serverAPI = "https://t2cxbnod53.execute-api.us-east-1.amazonaws.com/default"


  public postContact(name, email, message) {

    const apiEndpoint = this.serverAPI + '/fireBonesContactUs'
    const body = JSON.stringify({
      "body": {
        "name": name,
        "email": email,
        "message": message
      }
    });
    return this.http.post<apiReturn>(apiEndpoint, body);

  }

  public postSubscribe(email) {
    const apiEndpoint = this.serverAPI + '/fireBonesSubscribe'
    const body = JSON.stringify({
      "body": {
        "email": email
      }
    });
    return this.http.post<apiReturn>(apiEndpoint, body);

  }




}
