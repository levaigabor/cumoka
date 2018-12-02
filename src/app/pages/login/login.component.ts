import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/auth/authentication.service';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public loading = false;
  public submitted = false;
  public returnUrl: string;

  constructor(private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    private _route: ActivatedRoute,
    private _router: Router,
    public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: [''],
      password: ['']
    });


    if (this._authenticationService.isLoggedIn) {
      console.log('navigate to user page')
      this._router.navigate(['/user']);
    }
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }

  get form() {
    return this.loginForm.controls;
  }
  
  public onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this._authenticationService.login(this.form.username.value, this.form.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this._router.navigate(['/meals']);
          this.openErrorSnackBar('Sikeres Bejelentkezés!', 'Bezárás');
        },
        error => {
          this.loading = false;
          this.openErrorSnackBar('Sikertelen Bejelentkezés!', 'Bezárás');
        });
  }

  openErrorSnackBar(message: string, action?: string): void {
    this.snackBar.open(message, action, {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: 'sfToast--error'
    });
  }


}


