import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RecentMealComponent } from './recent-meal/recent-meal.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {path:'home', component:RecentMealComponent},
  {path: 'recipe-details', component:RecipeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'forgot-password', component:ForgotPasswordComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
