import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { MoviesService } from '../movies.service';
import { IMovieDetails } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsResolver implements Resolve<IMovieDetails | undefined> {
  constructor(private moviesService: MoviesService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovieDetails | undefined> | Promise<IMovieDetails | undefined> | IMovieDetails | undefined {
    const routState = this.router.getCurrentNavigation()?.extras.state;

    if (routState) {
      return this.moviesService.getDetails(routState['data']);
    } else {
      return undefined;
    }
  }
}
