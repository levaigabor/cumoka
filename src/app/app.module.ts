import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MomentModule } from 'ngx-moment';

import { UserFormComponent } from './pages/user-form/user-form.component';
import { MealsComponent } from './pages/meals/meals.component';
import { TrainingPlansComponent } from './pages/training-plans/training-plans.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { ChartComponent } from './chart/chart.component';

import { UserService } from './services/user/user.service';
import { AuthenticationService } from './services/auth/authentication.service';
import { JWTInterceptor } from './helpers/jwt-interceptor.service';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TrainingPageComponent } from './pages/training-page/training-page.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule, MatDatepickerModule, MatDialogModule, MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatNativeDateModule,
  MatSidenavModule,
  MatToolbarModule,
  MatSnackBarModule
} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    MealsComponent,
    TrainingPlansComponent,
    // RecipesComponent,
    LoginComponent, 
    RegisterUserComponent,
    ChartComponent,
    TrainingPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [
    UserService,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
