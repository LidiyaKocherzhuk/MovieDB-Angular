import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IMovieDetails } from '../../interfaces';
import { MoviesService } from '../../services';
import { environment } from '../../../../../environments/environment';

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
    // this.moviesService.getDetails(5000).subscribe(value => this.movie=value);
    this.activatedRoute.data.subscribe(({ movie }) => {
      this.movie = movie;
    })
  }

}
