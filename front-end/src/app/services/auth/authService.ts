import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSignal = signal<Boolean>(!!localStorage.getItem('token'));
  private isAuthenticated = this.isAuthenticatedSignal.asReadonly();

  login(token: string) {
    localStorage.setItem('auth_token', token);
    this.isAuthenticatedSignal.set(!!token);
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.isAuthenticatedSignal.set(false);
  }

  get isUserAuthenticated() {
    return this.isAuthenticated;
  }
}
