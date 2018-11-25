import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MealsComponent } from './pages/meals/meals.component';
import { TrainingPlansComponent } from './pages/training-plans/training-plans.component';
import { RecipesComponent } from './pages/recipes/recipes.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/route-guard/auth.guard';
import { RegisterUserComponent } from './pages/register-user/register-user.component';
import { UserFormComponent } from './pages/user-form/user-form.component';
import { TrainingPageComponent } from './pages/training-page/training-page.component';

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
    component: UserFormComponent,
    data: { title: 'User' },
    canActivate: [AuthGuard],
  },
  {
    path: 'meals',
    component: MealsComponent,
    data: { title: 'Étkezés' },
    canActivate: [AuthGuard],
  },
  {
    path: 'training',
    component: TrainingPlansComponent,
    data: { title: 'Edzéstervek' },
    canActivate: [AuthGuard],
  },
  { path: 'training/:id',
    component: TrainingPageComponent,
    data: { title: 'Event - Gifie' },
    canActivate: [AuthGuard],
  },
  /*
  {
    path: 'recipes',
    component: RecipesComponent,
    data: { title: 'Receptek' },
    canActivate: [AuthGuard],
  },*/
  {
    path: '',
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
