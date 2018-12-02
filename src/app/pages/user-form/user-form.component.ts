import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user/user.service';
import { first } from 'rxjs/operators';
import { delay } from 'q';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public id = 0;
  public user;
  public BMI;
  public quote;

  constructor(private _userService: UserService) {
    this.user = new User();
    this.quote = [];
  }

  ngOnInit() {
    this.id = JSON.parse(localStorage.getItem('userId'));
    this.getUserData();
    this.getQuotes();
  }

  editing = false;

  onSubmit() {
    this.editing = false;
    this.setUserData();
    this.getBMI();
  }

  public getBMI() {
    this._userService.getBMIIndex(this.id)
      .pipe(first()).subscribe(
        index => {
          this.BMI = index;
        }
      )
  }

  public getQuotes() {
    this._userService.getQuotes()
      .pipe(first()).subscribe(
        quote => {
          this.quote = quote;
          console.log(this.quote.qoute);
        }
      )
  }

  getUserData() {
    this._userService.getUserById(this.id)
      .subscribe(user => {
        console.log(user);
        this.user = user
      }
    );
    this.getBMI();
  }

  setUserData(): void {
    this._userService.updateUser(this.user)
      .subscribe(() => console.log('setUserData finished!'));
  }
}
