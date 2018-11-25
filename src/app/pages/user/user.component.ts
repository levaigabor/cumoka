import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { getSymbolIterator } from '@angular/core/src/util';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public BMI;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this.getBMI();
  }

  public getBMI() {
    this._userService.getBMIIndex(1)
      .pipe(first()).subscribe(
        index => {
          this.BMI = index;
        }
      )
  }
}
