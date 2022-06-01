import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../services/movies.service';
import { IMovie } from '../../interfaces/movie.interface';
import { environment } from '../../../../../environments/environment';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  movies: IMovie[];
  imagePath: string = environment.imageApi;
  page: number = 1;
  totalPages: number = 500;

  constructor(private moviesService: MoviesService, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.moviesService.getAll(this.page).subscribe(value =>  {
      this.movies = value.results;
    });
    this.dataService.storage.subscribe(value => {

      if (value) {
        this.moviesService.search(this.page, value).subscribe(value => this.movies = value.results);
      }

    });

  }

  pageOneBtn() {
    if (this.page === 1) {
      return;
    }
    this.page -= 1;
    this.moviesService.getAll(this.page).subscribe(({ results }) => this.movies = results);

  }

  pageThreeBtn() {
    if (this.page >= this.totalPages) {
      return;
    }
    this.page += 1;
    this.moviesService.getAll(this.page).subscribe(({ results }) => this.movies = results);

  }

  first_page() {
    this.page = 1;
    this.moviesService.getAll(this.page).subscribe(({ results }) => this.movies = results);
  }

  last_page() {
    this.page = this.totalPages;
    this.moviesService.getAll(this.totalPages).subscribe(({ results }) => this.movies = results);
  }



}
