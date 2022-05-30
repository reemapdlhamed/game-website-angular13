import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Game } from '../models/model';
import { APIResponce } from '../models/model';
// import { environment as env } from 'src/environments/environment.prod';
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
    return this.http.get<APIResponce<Game>>(`${env.BASE_URL}/games `, {
      params: params,
    });
  }
}
