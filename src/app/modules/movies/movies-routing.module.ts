import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesListCardComponent } from './components/movies-list-card/movies-list-card.component';
import { PosterPreviewComponent } from './components/poster-preview/poster-preview.component';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { GenreComponent } from './components/genre/genre.component';
import { SlideMenuComponent } from './components/slide-menu/slide-menu.component';
import { LatestMovieComponent } from './components/latest-movie/latest-movie.component';
import {MatIconModule} from "@angular/material/icon";



const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      // {path: '', redirectTo: ''}

    ]
  },
];

@NgModule({
  declarations: [
    HeaderComponent,
    MoviesListComponent,
    MoviesListCardComponent,
    PosterPreviewComponent,
    StarsRatingComponent,
    MovieInfoComponent,
    UserInfoComponent,
    GenreComponent,
    LayoutComponent,
    LatestMovieComponent,
    SlideMenuComponent,
    LatestMovieComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes),
    MatIconModule,
  ],
  exports: [RouterModule]
})
export class MoviesRoutingModule {
}
