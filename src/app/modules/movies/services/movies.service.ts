import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { urls } from '../config/urls';
import { IPage } from '../interfaces/page.inteface';
import { IMovie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getPage(): Observable<IPage> {
    return this.httpClient.get<IPage>(urls.movies)
  }

  getPopular(): Observable<IPage> {
    return this.httpClient.get<IPage>(urls.popular)
  }
  getGenres(): Observable<any> {
    return this.httpClient.get<any>(urls.genres);
  }
}
