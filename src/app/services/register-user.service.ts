import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  private _registerUserUrl = '';

  constructor(private _httpClient: HttpClient) { }

  public register(requestBody) {
    this._httpClient.post<HttpResponse<Object>>(this._registerUserUrl, requestBody).toPromise()
      .then(
        (resp) => {
          console.log(resp);
        },
        (resp) => {
          console.log(resp);
        }
      );
  }
}
