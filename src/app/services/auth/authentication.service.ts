import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _httpClient: HttpClient, private  _router: Router) { }

  public isLoggedIn = false;
  public redirectUrl = '/';

  public login(username: string, password: string) {
    return this._httpClient.post<any>(`http://localhost:8080/auth`, { username: username, password: password })
      .pipe(map(response => {
        if (response && response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response));
          this.isLoggedIn = true;
          console.log('login successful');
        }
        error => {
            console.log(error)
        }

        return response;
      }));
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.isLoggedIn = false;
    this._router.navigate(['/login']);
  }
}
