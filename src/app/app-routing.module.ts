import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserFormComponent } from './user-form/user-form.component';
import { MealsComponent } from './meals/meals.component';
import { TrainingPlansComponent } from './training-plans/training-plans.component';
import { RecipesComponent } from './recipes/recipes.component';

const appRoutes: Routes = [
  { path: 'userdata',      component: UserFormComponent },
  {
    path: 'meals',
    component: MealsComponent,
    data: { title: 'Étkezés' }
  },
  {
    path: 'training',
    component: TrainingPlansComponent,
    data: { title: 'Edzéstervek' }
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    data: { title: 'Receptek' }
  },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
