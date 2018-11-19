import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient) { }

  isLoggedIn = true;
  redirectUrl: string;

  public login() {
    this._httpClient.post<HttpResponse<Object>>(`/api/users`, {  }).toPromise()
      .then(
        (resp) => {
          this.isLoggedIn = true;
          console.log('auth successful');
        },
        (resp) => {
          this.isLoggedIn = false;
          console.log('login unsuccessful');
        }
      );
  }

  public logout(): void {
    this.isLoggedIn = false;
  }
}
