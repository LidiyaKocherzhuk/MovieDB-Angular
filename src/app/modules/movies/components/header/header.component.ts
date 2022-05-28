import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  genres: any;
  move = false;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getGenres().subscribe(value => this.genres = value.genres);
  }

  showGenres() {
    this.move = !this.move;
  }
}
