import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IMovieDetails } from '../../interfaces/movieDetails.interface';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  movie: IMovieDetails;
  imagePath: string = environment.imageApi;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ data }) => {
      console.log(data);
      this.movie = data;
    })
  }

}
