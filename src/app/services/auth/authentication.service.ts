import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _httpClient: HttpClient) { }

  public isLoggedIn = true;
  public redirectUrl = '/';

  public login(username: string, password: string) {
    return this._httpClient.post<any>(`/api/users`, { userName: username, password: password })
      .pipe(map(response => {
        if (response && response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.isLoggedIn = true;
          console.log('login successful');
        }

        return response;
      }));
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
  }
}
