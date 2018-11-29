import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userURL = 'http://localhost:8080/api/users/';
  public quotesUrl = 'http://localhost:8080/api/quotes';
  constructor(private _http: HttpClient) { }

  public getAllUsers() {
    return this._http.get<User[]>(this.userURL);
  }

  public getUserById(id: number) {
    return this._http.get(this.userURL + id);
  }

  public registerUser(user: User) {
    console.log(user);
    return this._http.post(this.userURL + 'signup', user);
  }

  public updateUser(user: User) {
    return this._http.put(this.userURL + user.id, user);
  }

  public deleteUser(id: number) {
    return this._http.delete(this.userURL + id);
  }

  public getBMIIndex(id: number) {
    return this._http.get<number>(this.userURL + 'bmi/' + id);
  }

  public getQuotes() {
    return this._http.get<any>(this.quotesUrl);
  }
}
