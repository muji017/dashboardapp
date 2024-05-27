import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: any = localStorage.getItem('token');
    const userType: any = localStorage.getItem('userType');

    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}${userType}`),
    });
    return next.handle(modifiedReq);
  }
}
