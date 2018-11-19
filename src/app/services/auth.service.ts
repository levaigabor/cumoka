import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpClient: HttpClient, private _router: Router) { }

  isLoggedIn = false;
  redirectUrl: string;

  public login() {
    this._httpClient.post<HttpResponse<Object>>(`/authenticate`, {  }).toPromise()
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
