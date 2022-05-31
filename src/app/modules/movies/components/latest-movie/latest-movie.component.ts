import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { IMovie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-latest-movie',
  templateUrl: './latest-movie.component.html',
  styleUrls: ['./latest-movie.component.css']
})
export class LatestMovieComponent implements OnInit {

  latestMovie: IMovie[];
  movies: IMovie[];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getLatest(2).subscribe(({ results }) => {
      this.latestMovie = results;
      this.movies = results;
    });
  }

  getLatest() {
    this.movies = this.latestMovie;
  }

  getUpcoming() {
    this.moviesService.getUpcoming(3).subscribe(({ results }) => this.movies = results)
  }

  getTopRated() {
    this.moviesService.getTopRated(4).subscribe(({ results }) => this.movies = results)
  }

  getPopular() {
    this.moviesService.getPopular(2).subscribe(({ results }) => this.movies = results)
  }

}
