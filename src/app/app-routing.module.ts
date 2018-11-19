import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserFormComponent } from './user-form/user-form.component';
import { MealsComponent } from './meals/meals.component';
import { TrainingPlansComponent } from './training-plans/training-plans.component';
import { RecipesComponent } from './recipes/recipes.component';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserComponent} from './user/user.component';
import {AuthGuard} from './services/auth.guard';
import {RegisterUserComponent} from './register-user/register-user.component';

const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'register',
    component: RegisterUserComponent,
    data: { title: 'Register' }
  },
  {
    path: 'user',
    component: UserComponent,
    data: { title: 'User' },
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'meals', component: MealsComponent, data: { title: 'Étkezés' } },
          { path: 'training', component: TrainingPlansComponent, data: { title: 'Edzéstervek' } },
          { path: 'recipes', component: RecipesComponent, data: { title: 'Receptek' } }
        ],
      }
    ]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Dashboard' }
  },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
