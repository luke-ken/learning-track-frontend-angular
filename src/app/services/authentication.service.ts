import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  AUTH_API = 'http://localhost:9000/api/auth/login';

  constructor(private http: HttpClient) {
  }

  signin(loginForm: FormGroup): Observable<any> {
    const formDataJson = JSON.stringify(loginForm.getRawValue());

    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post(this.AUTH_API, formDataJson, httpOptions);
  }
}
