import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthenticationService} from '../services/auth/authentication.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _authenticationService: AuthenticationService,
    private _router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 401 && this._router.url!='/login') {
        this._authenticationService.logout();
        location.reload(true);
      } 

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }
}
