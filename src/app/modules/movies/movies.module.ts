import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesService } from './services/movies.service';
import { DataService } from './services/data.service';
import {MovieDetailsResolver} from "./services/resolver/movie-details.resolver";

@NgModule({
  declarations: [
  ],
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
  ]
})
export class MoviesModule {
}
