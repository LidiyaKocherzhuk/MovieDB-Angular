import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MoviesService, DataService } from '../../services';
import { IGenre } from '../../interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  genres: IGenre[];

  constructor(private moviesService: MoviesService, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.moviesService.getGenres().subscribe(({ genres }) => {
      this.genres = genres;
    });
  }

  searchMovie(searchInput: HTMLInputElement) {
    this.dataService.storage.next(searchInput.value);
    this.router.navigate(['movieList'])
  }
}
