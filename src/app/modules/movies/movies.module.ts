import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesListCardComponent } from './components/movies-list-card/movies-list-card.component';
import { PosterPreviewComponent } from './components/poster-preview/poster-preview.component';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { MoviesService } from './services/movies.service';
import { GenreComponent } from './components/genre/genre.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MoviesListComponent,
    MoviesListCardComponent,
    PosterPreviewComponent,
    StarsRatingComponent,
    MovieInfoComponent,
    UserInfoComponent,
    GenreComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
  ],
  providers: [
    MoviesService,
  ]
})
export class MoviesModule {
}
