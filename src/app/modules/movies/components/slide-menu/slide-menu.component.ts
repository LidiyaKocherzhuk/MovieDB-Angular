import { Component, Input, OnInit } from '@angular/core';

import { IMovie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-slide-menu',
  templateUrl: './slide-menu.component.html',
  styleUrls: ['./slide-menu.component.css']
})
export class SlideMenuComponent implements OnInit {

  blockWight: number;
  offset: number = 0;
  @Input()
    movies: IMovie[];
  @Input()
    list: string

  constructor() {
  }

  ngOnInit(): void {
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
