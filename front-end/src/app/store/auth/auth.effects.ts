import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import * as AuthActions from './auth.actions';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { catchError, map, mergeMap, of, from, tap, switchMap } from 'rxjs';
import {
  showSuccessAlert,
  showErrorAlert,
} from '../alert-notification-store/alert-notification.action';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private cookieService = inject(CookieService);
  private router = inject(Router);

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap(({ email, password }) =>
        this.authService.login(email, password).pipe(
          map((loginResponse) => AuthActions.loginSuccess({ loginResponse })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  saveTokenToCookie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(({ loginResponse }) => {
        console.log('Auth Effect: Saving user to cookie', loginResponse);
        try {
          this.cookieService.set('user', JSON.stringify(loginResponse), 1);
          console.log('Auth Effect: User saved to cookie successfully');
        } catch (error) {
          console.error('Auth Effect: Error saving to cookie', error);
        }
      }),
      map(() => AuthActions.setLoading({ loading: false }))
    )
  );

  clearCookieOnLogout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        console.log(
          'Auth Effect: Logout triggered, clearing cookie and navigating'
        );
        try {
          this.cookieService.delete('user');
          console.log('Auth Effect: Cookie deleted');
        } catch (error) {
          console.error('Auth Effect: Error deleting cookie', error);
        }
        this.router.navigate(['/home']);
        console.log('Auth Effect: Navigation to home completed');
      }),
      map(() => AuthActions.logoutSuccess())
    )
  );

  initAuthFromCookie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.initAuthFromCookie),
      tap(() => {
        console.log('Auth Effect: Initializing auth from cookie');
      }),
      switchMap(() => {
        const userCookie = this.cookieService.get('user');
        console.log('Auth Effect: Retrieved cookie value', userCookie);

        if (userCookie) {
          try {
            const user = JSON.parse(userCookie);
            console.log(
              'Auth Effect: Cookie parsed successfully, user found',
              user
            );
            return of(AuthActions.initAuthFromCookieSuccess({ user }));
          } catch (error) {
            console.error('Auth Effect: Error parsing cookie', error);
            return of(AuthActions.logout());
          }
        } else {
          console.log('Auth Effect: No user cookie found');
          return of(AuthActions.setLoading({ loading: false }));
        }
      })
    )
  );

  loginSuccess$ = createEffect(() => {
    console.log('loginSuccess$ effect is being created');
    return this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(({ loginResponse }) => {
        console.log('Auth Effect: Login successful!', loginResponse);
      }),
      map(({ loginResponse }) =>
        showSuccessAlert({
          message: `Welcome back, ${loginResponse.firstName || 'User'}!`,
          duration: 3000,
        })
      )
    );
  });

  resetPassword$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.resetPassword),
      mergeMap(({ newPassword, email }) =>
        this.authService.passwordReset(newPassword, email).pipe(
          map((success) => {
            if (success) {
              console.log('AuthService: Password reset successful');
              return AuthActions.resetPasswordSuccess();
            } else {
              console.log('AuthService: Password reset failed');
              return AuthActions.resetPasswordFailure({
                error: 'Password reset failed. Please try again.',
              });
            }
          }),
          catchError((error) => {
            console.error('AuthService: Password reset error:', error);
            return of(
              AuthActions.resetPasswordFailure({
                error:
                  error.message ||
                  'An unexpected error occurred during password reset.',
              })
            );
          })
        )
      )
    )
  );

  resetPasswordSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.resetPasswordSuccess),
      map(() =>
        showSuccessAlert({
          message: 'Your password has been reset successfully. Please sign in.',
          duration: 3000,
        })
      )
    )
  );

  resetPasswordFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.resetPasswordFailure),
      map(({ error }) =>
        showErrorAlert({
          message: `${error}`,
          duration: 5000,
        })
      )
    )
  );

  sendPasswordResetEmail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.sendPasswordResetEmail),
      mergeMap(({ email }) =>
        this.authService.sendPasswordResetEmail(email).pipe(
          map((success) => {
            if (success) {
              console.log(
                'AuthService: Password reset email sent successfully'
              );
              return AuthActions.sendPasswordResetEmailSuccess();
            } else {
              console.log('AuthService: Failed to send password reset email');
              return AuthActions.resetPasswordFailure({
                error: 'Failed to send password reset email. Please try again.',
              });
            }
          }),
          catchError((error) => {
            console.error(
              'AuthService: Error sending password reset email:',
              error
            );
            return of(
              AuthActions.sendPasswordResetEmailFailure({
                error:
                  error.message ||
                  'An unexpected error occurred during password reset.',
              })
            );
          })
        )
      )
    )
  );

  sendPasswordResetEmailSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.sendPasswordResetEmailSuccess),
      map(() =>
        showSuccessAlert({
          message: 'Password reset link sent to your email.',
          duration: 3000,
        })
      )
    )
  );

  sendPasswordResetEmailFailure$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.sendPasswordResetEmailFailure),
      map(({ error }) =>
        showErrorAlert({
          message: `${error}`,
          duration: 5000,
        })
      )
    )
  );
}
