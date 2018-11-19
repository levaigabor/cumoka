import { Component, OnInit } from '@angular/core';
import {RegisterUserService} from '../services/register-user.service';
import {User} from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;

  constructor(private _registerUserService: RegisterUserService) { }

  ngOnInit() {
  }

  public onSubmit() {
    // const user = new User(this.password, this.username);
    // this._registerUserService.register(user);
  }

}
