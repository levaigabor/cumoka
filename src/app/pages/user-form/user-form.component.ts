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

  constructor(private _userService: UserService) {
    this.user = new User();
  }

  ngOnInit() {
    this.getUserData();
    this.getBMI();
  }

  submitted = false;

  onSubmit() {
    this.submitted = false;
    this.setUserData();
  }

  public getBMI() {
    this._userService.getBMIIndex(1)
      .pipe(first()).subscribe(
        index => {
          this.BMI = index;
        }
      )
  }

  getUserData() {
    const id = 1;
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

    this.getBMI();
  }
}
