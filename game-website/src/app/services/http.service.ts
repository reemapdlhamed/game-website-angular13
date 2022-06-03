import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Game } from '../models/model';
import { APIResponce } from '../models/model';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  getGameList(
    ordering: string,
    search?: string
  ): Observable<APIResponce<Game>> {
    let params = new HttpParams().set('ordering', ordering);
    if (search) {
      params = new HttpParams().set('ordering', ordering).set('search', search);
    }
    return this.http.get<APIResponce<Game>>(`${env.BASE_URL} `, {
      params: params,
    });
  }
  getGameDetails(id: string): Observable<Game> {
    const gameInfoRequest = this.http.get(`${env.BASE_URL}/${id}`);
    const gameTrailerRequest = this.http.get(`${env.BASE_URL}/${id}/movies`);
    const gameScreenshotRequest = this.http.get(
      `${env.BASE_URL}/${id}/screnshots`
    );
    return forkJoin({
      gameInfoRequest,
      gameTrailerRequest,
      gameScreenshotRequest,
    }).pipe(
      map((resp: any) => {
        return {
          ...resp['gameInfoRequest'],
          screenshots: resp['gameScreenshotRequest']?.results,
          trailers: resp['gameTrailerRequest']?.results,
        };
      })
    );
  }
}
