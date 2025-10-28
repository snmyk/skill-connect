import { Injectable } from '@angular/core';
import { LoginResponse } from '../../models/auth/login-response.model';
import { Observable, of, throwError } from 'rxjs';
import { delay, switchMap } from 'rxjs/operators';
import { UserModel } from '../../models/user/user.model';

interface TokenValidationResponse {
  isValid: boolean;
  user: UserModel | null;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(email: string, password: string): Observable<LoginResponse> {
    console.log('AuthService: Login called with email:', email);

    // Simulate API delay
    return of(null).pipe(
      delay(1000), // Simulate 1 second API call
      switchMap(() => {
        // Simulate an API call
        if (
          email === 'professional@skillconnect.com' &&
          password === 'password'
        ) {
          console.log('AuthService: Professional login successful');
          return of({
            id: '1',
            firstName: 'John',
            lastName: 'Doe',
            username: 'johndoe',
            email: 'professional@skillconnect.com',
            userRole: 'professional',
            jwtToken: 'fake-jwt-token-professional',
            refreshToken: 'fake-refresh-token-professional',
            errors: null,
          });
        } else if (
          email === 'client@skillconnect.com' &&
          password === 'password'
        ) {
          console.log('AuthService: Client login successful');
          return of({
            id: '2',
            firstName: 'Jane',
            lastName: 'Smith',
            username: 'janesmith',
            email: 'client@skillconnect.com',
            userRole: 'client',
            jwtToken: 'fake-jwt-token-client',
            refreshToken: 'fake-refresh-token-client',
            errors: null,
          });
        } else {
          console.log('AuthService: Login failed - invalid credentials');
          return throwError(() => new Error('Invalid email or password'));
        }
      })
    );
  }

  validatePasswordResetToken(
    token: string
  ): Observable<TokenValidationResponse> {
    // Simulate API delay and token validation
    return of(null).pipe(
      delay(1000), // Simulate 1 second API call
      switchMap(() => {
        // Simulate token validation logic
        const isValid = token === 'valid-reset-token';
        const user: UserModel | null = {
          id: '1',
          firstName: 'John',
          lastName: 'Doe',
          email: 'professional@skillconnect.com',
          userRole: 'professional',
          username: 'johndoe',
          jwtToken: null,
          refreshToken: null,
        };
        const validationResponse: TokenValidationResponse = {
          isValid,
          user: isValid ? user : null,
        };
        console.log(
          `AuthService: Password reset token validation result for token "${token}":`,
          isValid
        );
        return of(validationResponse);
      })
    );
  }

  passwordReset(newPassword: string, email: string): Observable<boolean> {
    //This will call the backend API to reset the password
    console.log(`AuthService: Password reset called for user ${email}`);

    return of(true);
  }
}
