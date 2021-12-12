import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {TokenStorageService} from '../services/token-storage.service';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.tokenService.getToken();
    if (token != null) {
      const modifiedRequest = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + token)});
      return next.handle(modifiedRequest);
    }
    return next.handle(request);
  }
}
