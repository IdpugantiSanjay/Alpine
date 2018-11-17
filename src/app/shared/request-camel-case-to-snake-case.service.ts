import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { decamelizeKeys } from 'humps';

@Injectable({
  providedIn: 'root'
})
export class RequestCamelCaseToSnakeCaseService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {

    if (event instanceof HttpRequest) {
      const caseConvertedRequest = req.clone({
        body: decamelizeKeys(req.body),
        params: new HttpParams({ fromObject: decamelizeKeys(req.params) as any }),
      });

      return next.handle(caseConvertedRequest);
    }

    return next.handle(req);

  }
}
