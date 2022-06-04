import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services';
import { IMovie } from '../../interfaces';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-interesting',
  templateUrl: './interesting.component.html',
  styleUrls: ['./interesting.component.css']
})
export class InterestingComponent implements OnInit {

  movies: IMovie[];
  imagePath: string = environment.imageApi;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getAllByGenre(1, 16).subscribe(({ results }) =>
      this.movies = results);
  }

}
