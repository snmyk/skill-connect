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
        from(this.authService.login(email, password)).pipe(
          map((user) => AuthActions.loginSuccess({ user })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    )
  );

  saveTokenToCookie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(({ user }) => {
        this.cookieService.set('user', JSON.stringify(user), 1); // Expires in 1 day
      })
    )
  );

  clearCookieOnLogout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        this.cookieService.delete('user');
        this.router.navigate(['/login']);
      })
    )
  );

  initAuthFromCookie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.initAuthFromCookie),
      switchMap(() => {
        const userCookie = this.cookieService.get('user');
        if (userCookie) {
          const user = JSON.parse(userCookie);
          return of(AuthActions.initAuthFromCookieSuccess({ user }));
        } else {
          return of(AuthActions.logout());
        }
      })
    )
  );

  loginSuccessNavigate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      switchMap(() => {
        this.router.navigate(['/browse/professionals']);
        return of(AuthActions.setLoading({ loading: false }));
      })
    )
  );
}
