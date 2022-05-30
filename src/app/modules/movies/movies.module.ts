import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    MoviesRoutingModule,

  ],
  exports: [
  ],
  providers: [
    MoviesService,
  ]
})
export class MoviesModule {
}
