import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services';
import { IMovie } from '../../interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: IMovie[];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getPopular().subscribe(({ results }) => this.movies = results);
  }

}
