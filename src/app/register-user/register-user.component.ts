import {Component, Input, OnInit} from '@angular/core';
import {RegisterUserService} from '../services/register-user.service';
import {User} from '../user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public username: string;
  public password: string;
  public height: number;
  public weight: number;

  constructor(private _registerUserService: RegisterUserService) { }

  ngOnInit() {
  }

  public onSubmit() {
    const newUser = new User(this.password, this.username, this.weight, this.height, 11);
    this._registerUserService.register(newUser);
  }

}
