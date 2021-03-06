import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  public registerForm: FormGroup;
  public loading = false;
  public submitted = false;

  constructor(private _formBuilder: FormBuilder,
    private _router: Router,
    private _userService: UserService) { }

  ngOnInit() {
    this.registerForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      enabled: ['true']
    });
  }

  get form() {
    return this.registerForm.controls;
  }

  public onSubmit() {
    console.log(this.registerForm.value);
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    let body = {
      enabled: true
    }
    this._userService.registerUser(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this._router.navigate(['/login']);
        },
        error => {
          this.loading = false;
          console.log(error)
        });
  }

}
