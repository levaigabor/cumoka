import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginUrl = 'http://localhost:8080/api/login';

  constructor(private _httpClient: HttpClient) { }

  public register(requestBody) {
    this._httpClient.post<HttpResponse<Object>>(this._loginUrl, requestBody).toPromise()
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
