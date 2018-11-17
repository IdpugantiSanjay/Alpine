import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { camelizeKeys } from 'humps';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResponseSnakeCaseToCamelCaseService {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req).pipe(map(event => {
      if (event instanceof HttpResponse) {
        event = event.clone({ body: camelizeKeys(event.body) });
      }
      return event;
    }));
  }
}
