import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';

import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

@Injectable()
export class HttpHeaderInteeceptor implements HttpInterceptor {
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      // setHeaders: {
      //   'x-rapidapi-key': 'esGbwrm390mshS2BCl0RALxQRtZTp1W7sFMjsnyJlJzDXVkW0H',
      //   'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      // },
      setParams: {
        // key: 'e40e743af2c94b0c916a8aa618fb4473',
        key : 'fd10dae43e29442686de6e2a3e1abce6'
      }
    });
    return next.handle(req);
  }
}
