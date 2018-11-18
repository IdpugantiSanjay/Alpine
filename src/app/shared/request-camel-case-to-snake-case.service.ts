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
    const caseConvertedRequest = req.clone({
      body: decamelizeKeys(req.body),
      params: this.urlParams(req.params)
    });

    return next.handle(caseConvertedRequest);


  }


  private urlParams(params: HttpParams): HttpParams {
    const paramObject = {};
    params.keys().forEach(key => paramObject[key] = params.get(key));
    return new HttpParams({ fromObject: decamelizeKeys(paramObject) as any });
  }
}
