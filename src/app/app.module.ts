import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import { UserFormComponent } from './user-form/user-form.component';
import { MealsComponent } from './meals/meals.component';
import { TrainingPlansComponent } from './training-plans/training-plans.component';
import { RecipesComponent } from './recipes/recipes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    MealsComponent,
    TrainingPlansComponent,
    RecipesComponent,
    DashboardComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
