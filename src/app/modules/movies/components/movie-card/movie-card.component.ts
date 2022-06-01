import { Component, Input, OnInit } from '@angular/core';
import { IMovie } from '../../interfaces/movie.interface';
import { environment } from '../../../../../environments/environment';
import { MoviesService } from '../../services/movies.service';
import {IMovieDetails} from "../../interfaces/movieDetails.interface";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {

  @Input()
    id: number;
  movie: IMovieDetails;
  imagePath: string = environment.imageApi;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getDetails(this.id).subscribe(value => this.movie = value )
  }

}
