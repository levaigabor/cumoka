import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrainingplansService {

  constructor(private http: HttpClient) { }

  public getAllUsers() {
    return this.http.get<User[]>(`/api/users`);
  }

  public getUserById(id: number) {
    return this.http.get(`/api/users/` + id);
  }

  public registerUser(user: User) {
    return this.http.post(`/api/users/register`, user);
  }

  public updateUser(user: User) {
    return this.http.put(`/api/users/` + user.id, user);
  }

  public deleteUser(id: number) {
    return this.http.delete(`/api/users/` + id);
  }
}
