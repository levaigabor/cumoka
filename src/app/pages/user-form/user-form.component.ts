import { Component, OnInit, ViewChild } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  public user;
  public BMI;
  public quote;

  constructor(private _userService: UserService) {
    this.user = new User();
    this.quote = [];
  }

  ngOnInit() {
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
    let id = JSON.parse(localStorage.getItem('userId'));
    this._userService.getBMIIndex(id)
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
    this.getBMI();

    let id = JSON.parse(localStorage.getItem('userId'));
    this._userService.getUserById(id)
      .subscribe(user => {
        console.log(user);
        this.user = user
      }
    );
  }

  setUserData(): void {
    this._userService.updateUser(this.user)
      .subscribe(() => console.log('setUserData finished!'));
  }
}
