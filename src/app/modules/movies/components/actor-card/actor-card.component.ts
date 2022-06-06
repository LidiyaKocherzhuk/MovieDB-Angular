import { Component, Input, OnInit } from '@angular/core';

import { IPerson } from '../../interfaces';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-actor-card',
  templateUrl: './actor-card.component.html',
  styleUrls: ['./actor-card.component.css']
})
export class ActorCardComponent implements OnInit {

  @Input()
    actor: IPerson;
  imagePath: string = environment.imageApi;

  constructor() { }

  ngOnInit(): void {
  }

}
