import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesService, DataService, MovieDetailsResolver, PersonResolver } from './services';


@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MoviesRoutingModule,
  ],

  providers: [
    MoviesService,
    DataService,
    MovieDetailsResolver,
    PersonResolver,
  ]
})
export class MoviesModule {
}
