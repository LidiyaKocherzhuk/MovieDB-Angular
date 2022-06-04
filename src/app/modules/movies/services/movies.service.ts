import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { urls } from '../config/urls';
import { IPage } from '../interfaces/page.inteface';
import { IGenre, IGenres } from '../interfaces/genre.interface';
import { environment } from '../../../../environments/environment';
import { IMovieDetails } from '../interfaces/movieDetails.interface';
import { IPerson } from '../interfaces/person.inteface';

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

  getGenreById(id:number): Observable<IGenre> {
    return this.httpClient.get<IGenre>(`${urls.genres}/${id}`)
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
}
