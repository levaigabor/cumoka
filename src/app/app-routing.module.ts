import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MealsComponent } from './meals/meals.component';
import { TrainingPlansComponent } from './training-plans/training-plans.component';
import { RecipesComponent } from './recipes/recipes.component';
import {LoginComponent} from './login/login.component';
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
  },
  { path: 'meals',
    component: MealsComponent,
    data: { title: 'Étkezés' },
    canActivate: [AuthGuard],
  },
  { path: 'training',
    component: TrainingPlansComponent,
    data: { title: 'Edzéstervek' },
    canActivate: [AuthGuard],
  },
  { path: 'recipes',
    component: RecipesComponent,
    data: { title: 'Receptek' },
    canActivate: [AuthGuard],
  },

  { path: '',
    redirectTo: 'login',
    canActivate: [AuthGuard],
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
