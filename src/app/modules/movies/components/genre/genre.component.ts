import { Component, Input, OnInit } from '@angular/core';
import { IGenre } from '../../interfaces/genre.interface';
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  @Input()
    genre: IGenre;

  constructor(private dataService:DataService, private router: Router) {
  }

  ngOnInit(): void {
  }

  getMovieByGenre() {
    this.router.navigate(['/movieList']);
    this.dataService.genre.next(this.genre);
  }
}
