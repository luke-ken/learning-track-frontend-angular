import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class TokenStorageService {

  TOKEN_KEY = 'auth_token';
  USER_KEY = 'auth_user';

  constructor() {
  }

  public getToken(): string | null {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  public saveToken(token: string): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  public getUser(): any {
    const user = sessionStorage.getItem(this.USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }

  public saveUser(user: any): void {
    sessionStorage.removeItem(this.USER_KEY);
    sessionStorage.setItem(this.USER_KEY, JSON.stringify(user));
  }

  public removeToken(): void {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }
  public removeUser(): void {
    sessionStorage.removeItem(this.USER_KEY);
  }
}
