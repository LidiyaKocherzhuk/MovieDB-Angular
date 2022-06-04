import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMovieDetails } from '../../interfaces/movieDetails.interface';
import { environment } from '../../../../../environments/environment';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  movie: IMovieDetails;
  imagePath: string = environment.imageApi;

  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.moviesService.getDetails(5000).subscribe(value => this.movie=value);
    // this.activatedRoute.data.subscribe(({ movie}) => {
    //   console.log(data);
    //   this.movie = data;
    // })
  }

}
