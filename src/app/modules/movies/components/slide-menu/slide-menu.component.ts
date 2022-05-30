import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { IMovie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.css']
})
export class SlideMenuComponent implements OnInit {

  blockWight: number;
  offset: number = 0;
  movies: IMovie[];

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    this.moviesService.getPopular().subscribe(({ results }) => this.movies = results);
  }

  prev(moviesBlock: HTMLDivElement) {
    this.blockWight = moviesBlock.offsetWidth;
    if (this.offset === 0) {
      return
    }
    this.offset += this.blockWight;
    moviesBlock.style.cssText = `transform: translateX(${this.offset}px)`
  }

  next(moviesBlock: HTMLDivElement) {
    this.blockWight = moviesBlock.offsetWidth;
    if (-this.offset > this.blockWight) {
      return;
    } else {
      this.offset -= this.blockWight;
      moviesBlock.style.cssText = `transform: translateX(${this.offset}px)`
    }

  }
}
