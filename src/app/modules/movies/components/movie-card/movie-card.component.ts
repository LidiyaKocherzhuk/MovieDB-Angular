import { Component, Input, OnInit } from '@angular/core';

import { environment } from '../../../../../environments/environment';
import { MoviesService } from '../../services/movies.service';
import { IMovieDetails } from '../../interfaces/movieDetails.interface';
import {IMovie} from "../../interfaces/movie.interface";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input()
    movie: IMovie;
  imagePath: string = environment.imageApi;

  constructor() {
  }

  ngOnInit(): void {
  }

}
