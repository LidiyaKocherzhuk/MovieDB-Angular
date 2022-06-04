import {Component, OnInit} from '@angular/core';
import {DataService, MoviesService} from "../../services";
import {IGenre} from "../../interfaces";
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  genres: IGenre[];

  constructor(
    private moviesService: MoviesService,
    private dataService: DataService,
    private router: Router
  ) {
  }


  ngOnInit(): void {
    this.moviesService.getGenres().subscribe(({genres}) => {
      this.genres = genres;
    });
  }

  getMovieByGenre(genre: IGenre) {
    this.dataService.genre.next(genre);
    this.router.navigate(['movieList']);
  }
}
