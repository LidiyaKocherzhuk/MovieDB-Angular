import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService } from '../../services/movies.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  genres: any;
  move = false;

  constructor(private moviesService: MoviesService, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.moviesService.getGenres().subscribe(value => this.genres = value.genres);
  }

  showGenres() {
    this.move = !this.move;
  }

  closeGenres() {
    this.move = !this.move;
  }

  searchMovie(searchInput: HTMLInputElement) {
    this.dataService.storage.next(searchInput.value);
    this.router.navigate(['movieList'])
  }
}
