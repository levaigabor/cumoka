import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public userURL = 'http://localhost:8080/api/users/';
  constructor(private http: HttpClient) { }

  public getAllUsers() {
    return this.http.get<User[]>(this.userURL);
  }

  public getUserById(id: number) {
    return this.http.get(this.userURL + id);
  }

  public registerUser(user: User) {
    return this.http.post(this.userURL + 'register', user);
  }

  public updateUser(user: User) {
    return this.http.put(this.userURL + user.id, user);
  }

  public deleteUser(id: number) {
    return this.http.delete(this.userURL + id);
  }

  public getBMIIndex(id: number) {
    return this.http.get<number>(this.userURL + 'bmi/' + id);
  }
}
