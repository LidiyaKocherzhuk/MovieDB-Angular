import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './myLayout/layout/layout.component';
import { HomeComponent } from './myLayout/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesListCardComponent } from './components/movies-list-card/movies-list-card.component';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { GenreComponent } from './components/genre/genre.component';
import { SlideMenuComponent } from './components/slide-menu/slide-menu.component';
import { LatestMovieComponent } from './components/latest-movie/latest-movie.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { InterestingComponent } from './components/interesting/interesting.component';
import { MovieDetailsResolver } from './services';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'movieList', component: MoviesListComponent },
      {
        path: 'details',
        resolve: { movie: MovieDetailsResolver },
        component: MovieInfoComponent
      },

    ]
  },
];

@NgModule({
  declarations: [
    HeaderComponent,
    MoviesListComponent,
    MoviesListCardComponent,
    StarsRatingComponent,
    MovieInfoComponent,
    UserInfoComponent,
    GenreComponent,
    LayoutComponent,
    LatestMovieComponent,
    SlideMenuComponent,
    HomeComponent,
    MovieCardComponent,
    FooterComponent,
    InterestingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes),
    MatIconModule,
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule {
}
