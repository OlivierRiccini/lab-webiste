import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IEmail } from '../models/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {
  }

  public sendEmail(email: IEmail): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json'
    });
    const body = {
      firstName: email.firstName,
      lastName: email.lastName,
      from: email.from,
      to: environment.contactEmail,
      subject: 'Hello Blockbrainers!',
      html: `<div style="padding:15px">
              <p><b>Sender first name: </b>${email.firstName}</p>
              <p><b>Sender last name: </b>${email.lastName}</p>
              <p><b>Contact email: </b>${email.from}</p>
              <hr>
              <p>${email.message}</p>
            </div>`,
    };

    return this.http.post(environment.emailerApiUrl, body, { headers, observe: 'response' });
  }
}
