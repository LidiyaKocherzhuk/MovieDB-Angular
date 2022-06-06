import { Component, Input, OnInit } from '@angular/core';

import { IMovie } from '../../interfaces';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-intresting-card',
  templateUrl: './intresting-card.component.html',
  styleUrls: ['./intresting-card.component.css']
})
export class IntrestingCardComponent implements OnInit {

  @Input()
    movie: IMovie;
  imagePath: string = environment.imageApi;


  constructor() { }

  ngOnInit(): void {
  }

}
