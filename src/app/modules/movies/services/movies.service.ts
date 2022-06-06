import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { urls } from '../config/urls';
import { IPage, IGenres,  IMovieDetails,  IPerson,  IVideoPage, } from '../interfaces';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.movies}&page=${page}` );
  }

  getAllByGenre(page:number, genreId: number): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.movies}&page=${page}&with_genres=${genreId}`)
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

  getGenres(): Observable<IGenres> {
    return this.httpClient.get<IGenres>(urls.genres);
  }

  search(page: number, query: string | number): Observable<IPage> {
    return this.httpClient.get<IPage>(`${urls.search}&page=${page}&query=${query}`)
  }

  getDetails(id: number): Observable<IMovieDetails> {
    return this.httpClient.get<IMovieDetails>(`${environment.API}/movie/${id}?api_key=${environment.apiKey}`)
  }

  getPerson(id: number): Observable<IPerson> {
    return this.httpClient.get<IPerson>(`${environment.API}/person/${id}?api_key=${environment.apiKey}`)
  }

  getVideo(id: number): Observable<IVideoPage> {
    return this.httpClient.get<IVideoPage>(`${environment.API}/movie/${id}/videos?api_key=${environment.apiKey}`)
  }
}
