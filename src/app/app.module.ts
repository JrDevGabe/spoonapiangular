import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Api Imports
import { HttpClientModule } from '@angular/common/http'
import { SpoonapiService } from "./service/spoonapi.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecentMealComponent } from './recent-meal/recent-meal.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FindrecipeComponent } from './findrecipe/findrecipe.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FooterComponent } from './footer/footer.component';
import { RecipecategoriesComponent } from './recipecategories/recipecategories.component';
import { LatestrecipesComponent } from './latestrecipes/latestrecipes.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    RecentMealComponent,
    NavigationComponent,
    FindrecipeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    RecipecategoriesComponent,
    LatestrecipesComponent,
    RecipeComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SpoonapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
