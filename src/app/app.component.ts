import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Fitness App';
  userLoggedIn = false;

  constructor(private _authService: AuthService) {
    if (this._authService.isLoggedIn) {
      this.userLoggedIn = true;
      return;
    }
  }
}
