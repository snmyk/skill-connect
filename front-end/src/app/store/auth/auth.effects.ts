import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import * as AuthActions from './auth.actions';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { catchError, map, mergeMap, of, from, tap, switchMap } from 'rxjs';

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

  loginSuccess$ = createEffect(
    () => {
      console.log('loginSuccess$ effect is being created');
      return this.actions$.pipe(
        ofType(AuthActions.loginSuccess),
        tap(({ loginResponse }) => {
          console.log('Auth Effect: Login successful!', loginResponse);
        })
      );
    },
    { dispatch: false }
  );
}
