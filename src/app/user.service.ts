import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private userDataUrl = 'api/userdata';

  getUserData(id: number): Observable<User> {
    console.log("getUserData");
    const url = `${this.userDataUrl}/${id}`;
    return this.http.get<User>(url)
      .pipe(
        tap(_ => console.log(`User id=${id}`)),
        catchError(this.handleError<User>('getUserData'))
      );
  }

  setUserData(user: User): Observable<any> {
    console.log("setUserData");
    return this.http.put(this.userDataUrl, user, httpOptions)
      .pipe(
        tap(_ => console.log(`updated user id=${user.id}`)),
        catchError(this.handleError<any>('setUserData'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
