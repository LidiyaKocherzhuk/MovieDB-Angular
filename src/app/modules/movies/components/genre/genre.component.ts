import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IGenre } from '../../interfaces';
import { DataService } from '../../services';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  @Input()
    genre: IGenre;

  constructor(private dataService:DataService, private router: Router) {
  }

  ngOnInit(): void {
  }

  getMovieByGenre() {
    this.router.navigate(['/movieList']);
    this.dataService.genre.next(this.genre);
  }
}
