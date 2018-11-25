import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UserFormComponent } from './pages/user-form/user-form.component';
import { MealsComponent } from './pages/meals/meals.component';
import { TrainingPlansComponent } from './pages/training-plans/training-plans.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { ChartComponent } from './chart/chart.component';

import { UserService } from './services/user/user.service';
import { AuthenticationService } from './services/auth/authentication.service';
import { JWTInterceptor } from './helpers/jwt-interceptor.service';
import { ErrorInterceptor } from './helpers/error.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    MealsComponent,
    TrainingPlansComponent,
    // RecipesComponent,
    DashboardComponent,
    LoginComponent,
    RegisterUserComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    AuthenticationService,
    /*
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
