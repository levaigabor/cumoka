import { Component } from '@angular/core';
import { AuthenticationService } from './services/auth/authentication.service';
import { RouterEvent, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Fitness App';
  userLoggedIn = false;
  opened: false;
  
  constructor(private _authenticationService: AuthenticationService,
    private _router: Router) {
    _router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationEnd) {
      if (this._authenticationService.isLoggedIn) {
        this.userLoggedIn = true;
        window.scrollTo(0, 0);
        return;
      } else {
        this.userLoggedIn = false;
      }
    }
  }

  public logout() {
    this._authenticationService.logout();
  }
}
