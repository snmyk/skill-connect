import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, inject } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import * as registrationActions from './registration.actions';
import { map, catchError, switchMap, of } from 'rxjs';

@Injectable()
export class RegistrationEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registrationActions.register),
      switchMap(({ professionalApplication }) =>
        this.authService.register(professionalApplication).pipe(
          map(() => registrationActions.registrationSuccess()),
          catchError((error) =>
            of(registrationActions.registrationFailure({ error }))
          )
        )
      )
    )
  );
}
