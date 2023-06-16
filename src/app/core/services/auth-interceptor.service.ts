import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({ providedIn: 'root' })
export class AuthInterceptorService implements HttpInterceptor {
  private authService = inject(AuthService);
  constructor() {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    req = req.clone({
      headers: req.headers.append('authorization', `bearer ${token}`),
    });
    return next.handle(req);
  }
}
