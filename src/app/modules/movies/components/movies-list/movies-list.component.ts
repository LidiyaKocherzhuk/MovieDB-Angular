import { Component, OnInit } from '@angular/core';

import { MoviesService, DataService } from '../../services';
import { IMovie } from '../../interfaces';
import { environment } from '../../../../../environments/environment';
import { charactersForSearch } from '../../characters/charactersForSearch';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: IMovie[];
  page: number = 1;
  genreName: string;
  imagePath: string = environment.imageApi;
  characters: string[] = charactersForSearch;
  totalPages: number = 500;

  constructor(private moviesService: MoviesService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.moviesService.getAll(this.page).subscribe(value => {
      this.movies = value.results;
    });

    this.dataService.storage.subscribe(value => {
      if (value) {
        this.moviesService.search(this.page, value).subscribe(value => this.movies = value.results);
      }
      window.scrollTo(0, 0);
    });

    this.dataService.genre.subscribe(value => {

      if (value) {
        this.moviesService.getAllByGenre(this.page, value.id).subscribe(value => {
          this.movies = value.results
        })
      }

      this.genreName = value.name;
      window.scrollTo(0, 0);
    });

  }

  getAllMovies() {
    this.moviesService.getAll(this.page).subscribe(value => {
      this.movies = value.results;
    });
  }

  searchMovies(character: string) {
    this.dataService.storage.next(character);
  }

  pageOneBtn() {
    if (this.page === 1) {
      return;
    }

    this.page -= 1;
    this.moviesService.getAll(this.page).subscribe(({ results }) => this.movies = results);
    window.scrollTo(0, 0);
  }

  pageThreeBtn() {
    if (this.page >= this.totalPages) {
      return;
    }

    this.page += 1;
    this.moviesService.getAll(this.page).subscribe(({ results }) => this.movies = results);
    window.scrollTo(0, 0);
  }

  first_page() {
    this.page = 1;
    this.moviesService.getAll(this.page).subscribe(({ results }) => this.movies = results);
    window.scrollTo(0, 0);
  }

  last_page() {
    this.page = this.totalPages;
    this.moviesService.getAll(this.totalPages).subscribe(({ results }) => this.movies = results);
    window.scrollTo(0, 0);
  }


}
