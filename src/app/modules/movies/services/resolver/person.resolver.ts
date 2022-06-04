import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { IPerson } from '../../interfaces/person.inteface';
import { MoviesService } from '../movies.service';

@Injectable({
  providedIn: 'root'
})
export class PersonResolver implements Resolve<IPerson | undefined> {
  constructor(private moviesService: MoviesService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPerson | undefined> | Promise<IPerson | undefined> | IPerson | undefined {
    const routState = this.router.getCurrentNavigation()?.extras.state;

    if (routState) {
      return this.moviesService.getPerson(routState['data']);
    }
    return undefined;
  }

}
