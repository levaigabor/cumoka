import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { UserFormComponent } from './pages/user-form/user-form.component';
import { MealsComponent } from './pages/meals/meals.component';
import { TrainingPlansComponent } from './pages/training-plans/training-plans.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/user/user.component';
import { RegisterUserComponent } from './pages/register-user/register-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    MealsComponent,
    TrainingPlansComponent,
    RecipesComponent,
    DashboardComponent,
    LoginComponent,
    UserComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
