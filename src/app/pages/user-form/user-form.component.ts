import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
    // this.getUserData();
  }

  weights = ['50', '60', '70', '80'];

  user = new User('Johnny Bravo', "pass", 11, 170);

  submitted = false;

  // onSubmit() {
  //   this.submitted = true;
  //   this.setUserData();
  // }

  // getUserData() {
  //   const id = 0;
  //   this.userService.getUserData(id)
  //     .subscribe(user => this.user = user);
  // }

  // setUserData(): void {
  //     this.userService.setUserData(this.user)
  //       .subscribe(() => console.log('setUserData finished!'));
  // }
  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.user); }
}
