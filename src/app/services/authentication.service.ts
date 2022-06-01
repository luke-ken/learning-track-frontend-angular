import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {TokenStorageService} from './token-storage.service';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  AUTH_API = 'http://localhost:9000/api/auth/login';

  constructor(private http: HttpClient, private tokenService: TokenStorageService) {
  }

  login(loginForm: FormGroup): Observable<any> {
    const formDataJson = JSON.stringify(loginForm.getRawValue());

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(this.AUTH_API, formDataJson, httpOptions);
  }

  logout(): void {
    this.tokenService.removeToken();
    this.tokenService.removeUser();
  }
}
