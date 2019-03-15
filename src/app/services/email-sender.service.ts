import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class EmailSenderService {
  
  constructor() { }

  fileEvent(fileInput: any) {
    const AWSService = AWS;
    const region = '<insert your region here>';
    const bucketName = '<insert your bucket name>';
    const IdentityPoolId = '<insert your identity pool id>';
    const file = fileInput.target.files[0];
  //Configures the AWS service and initial authorization
    AWSService.config.update({
      region: region,
      credentials: new AWSService.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
      })
    });
  //adds the S3 service, make sure the api version and bucket are correct

  }

}
