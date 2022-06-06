import { Component, OnInit } from '@angular/core';

import { IPerson } from '../../interfaces';
import { MoviesService } from '../../services';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  actors: IPerson[] = [];
  actorBiography: IPerson
  imagePath: string = environment.imageApi;

  constructor(private moviesService: MoviesService) {
  }

  ngOnInit(): void {
    for (let i = 1; i <= 4; i++) {
      this.moviesService.getPerson(i).subscribe(value => {
        this.actors.push(value);
        if (i === 1) {
          this.actorBiography = value;
        }
      });
    }
  }

  getBiography(actor: IPerson) {
    this.actorBiography = actor;
  }
}
