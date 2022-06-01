import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { urls } from '../config/urls';
import { IPage } from '../interfaces/page.inteface';
import { IGenre } from '../interfaces/genre.interface';
import { environment } from '../../../../environments/environment';
import { IMovieDetails } from '../interfaces/movieDetails.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.movies}&page=${page}` );
  }

  getPopular(page?: number): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.popular}&page=${page}`)
  }

  getLatest(page?: number): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.nowPlaying}&page=${page}`)
  }

  getTopRated(page?: number): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.nowPlaying}&page=${page}`)
  }

  getUpcoming(page?: number): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.nowPlaying}&page=${page}`)
  }

  getGenres(): Observable<any> {
    return this.httpClient.get<any>(urls.genres);
  }

  search(page: number, query: string): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.search}&page=${page}&query=${query}`)
  }

  getDetails(id: number): Observable<IMovieDetails> {
    return this.httpClient.get<IMovieDetails>(`${environment.API}/movie/${id}?api_key=${environment.apiKey}`)
  }
}
