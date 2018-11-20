import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild} from '@angular/router';
import {AuthenticationService} from '../auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private _authenticationService: AuthenticationService, private _router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    console.log('stored url: ' + url)

    return this.checkLogin(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }


  checkLogin(url: string): boolean {
    if (this._authenticationService.isLoggedIn) {
      console.log('auth successful');
      return true;
    }
    this._authenticationService.redirectUrl = url;
    console.log('auth unsuccessful');
    this._router.navigate(['/login']);
    return false;
  }
}
