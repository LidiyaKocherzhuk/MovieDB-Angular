import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.css']
})
export class StarsRatingComponent implements OnInit, OnChanges {

  @Input()
    rating: number;

  star = [];
  star_border = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (let i = 1; i <= 10; i++) {
      if (i <= this.rating) {
        this.star.length = i;
      }
    }
    this.star_border.length = 10 - this.star.length;
  }

  ngOnInit(): void {

  }

}
