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
  url: string = 'https://www.youtube.com/embed/';
  videoPath: string;
  clickMovie = false;

  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ movie }) => {
      this.movie = movie;

      this.moviesService.getVideo(movie.id).subscribe(
        ({ results }) => {
          this.videoPath = results[0].key
          console.log(results[0].key)
        }

      );
      window.scrollTo(0, 0);
    })

  }

  click() {
    this.clickMovie = !this.clickMovie;
  }
}
