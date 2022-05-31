import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { urls } from '../config/urls';
import { IPage } from '../interfaces/page.inteface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getAll(page: number): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.movies}&page=${page}`)
  }

  getPopular(page: number): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.popular}&page=${page}`)
  }

  getLatest(page: number): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.nowPlaying}&page=${page}`)
  }

  getTopRated(page: number): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.nowPlaying}&page=${page}`)
  }

  getUpcoming(page: number): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.nowPlaying}&page=${page}`)
  }

  getGenres(): Observable<any> {
    return this.httpClient.get<any>(urls.genres);
  }
}
