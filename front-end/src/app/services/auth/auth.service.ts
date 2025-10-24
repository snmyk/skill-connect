import { Injectable } from '@angular/core';
import { LoginResponse } from '../../models/auth/login-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): Promise<LoginResponse> {
    // Simulate an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          email === 'professional@skillconnect.com' &&
          password === 'password'
        ) {
          resolve({
            id: '1',
            firstName: 'John',
            lastName: 'Doe',
            username: 'johndoe',
            email: 'professional@skillconnect.com',
            userRole: 'professional',
            jwtToken: 'fake-jwt-token',
            refreshToken: 'fake-refresh-token',
            errors: null,
          });
        } else {
          reject('Invalid email or password');
        }
      }, 1000);
    });
  }
}
