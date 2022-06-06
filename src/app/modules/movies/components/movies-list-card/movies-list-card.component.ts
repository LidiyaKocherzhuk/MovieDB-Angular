import { Component, Input, OnInit } from '@angular/core';

import { environment } from '../../../../../environments/environment';
import { IMovie } from '../../interfaces';

@Component({
  selector: 'app-movies-list-card',
  templateUrl: './movies-list-card.component.html',
  styleUrls: ['./movies-list-card.component.css']
})
export class MoviesListCardComponent implements OnInit {

  @Input()
    movie: IMovie;
  @Input()
    list: string
  status = false;
  imagePath: string = environment.imageApi;
  innerWidth:number

  constructor() {
  }

  ngOnInit(): void {
    if (this.list === 'popular') {
      this.innerWidth = window.innerWidth / 5;
    }
    if (this.list === 'latest') {
      this.innerWidth = ((window.innerWidth - (window.innerWidth / 100 * 10)) / 100 * 25) - 23.3;
      this.status = true;
    }
  }

}
