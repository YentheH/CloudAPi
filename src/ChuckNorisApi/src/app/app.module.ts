import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';
import { ChuckNorisService } from './service/ChuckNoris.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { OwnApiComponent } from './own-api/own-api.component';
import { OwnJokeService } from './service/OwnJoke.service';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavBarComponent,
    RandomJokeComponent,
    CategoriesComponent,
    SearchComponent,
    HomeComponent,
    OwnApiComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'categories', component: CategoriesComponent},
      {path: 'search', component: SearchComponent},
      {path: 'OwnJoke', component: OwnApiComponent},
      {path: '' , redirectTo: 'home' , pathMatch: 'full'},
      {path: "**", component: PageNotFoundComponent}

    ], {useHash: true}),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ChuckNorisService,
    OwnJokeService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
