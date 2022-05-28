import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { urls } from '../config/urls';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private httpClient: HttpClient) { }

  getGenres(): Observable<any> {
    return this.httpClient.get<any>(urls.genres);
  }
}
