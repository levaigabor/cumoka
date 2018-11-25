import { Component } from '@angular/core';
import {AuthenticationService} from './services/auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Fitness App';
  userLoggedIn = true;
  opened: false;

  constructor(private _authenticationService: AuthenticationService) {
    if (this._authenticationService.isLoggedIn) {
      this.userLoggedIn = true;
      return;
    }
  }
}
