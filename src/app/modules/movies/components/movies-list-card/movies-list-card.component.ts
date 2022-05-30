import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { IMovie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movies-list-card.component.html',
  styleUrls: ['./movies-list-card.component.css']
})
export class MoviesListCardComponent implements OnInit {

  @Input()
    movie: IMovie;
  imagePath: string = environment.imageApi;
  innerWidth:number = window.innerWidth / 5

  constructor() {
  }

  ngOnInit(): void {
  }

}
