import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { IMovie } from '../../interfaces/movie.interface';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, OnChanges {

  movies: IMovie[];
  imagePath: string = environment.imageApi;
  page: number = 1;
  totalPages: number;

  constructor(private moviesService: MoviesService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.moviesService.getAll(this.page).subscribe(({ results, total_pages }) => {
      this.movies = results;
      this.totalPages = total_pages;
    });
  }

  ngOnInit(): void {
    this.moviesService.getAll(this.page).subscribe(({ results, total_pages }) => {
      this.movies = results;
      this.totalPages = total_pages;
    });
  }

  pageOneBtn() {
    if (this.page === 1) {
      return;
    }
    this.page -= 1;
  }

  pageTwoBtn() {
  }

  pageThreeBtn() {
    if (this.page > this.totalPages - 1) {
      return;
    }
    this.page += 1;
  }
}
