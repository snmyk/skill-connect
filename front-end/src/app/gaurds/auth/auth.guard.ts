import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { AppState } from '../../store';

export const authGuard = () => {
  const router = inject(Router);
  const store = inject(Store<AppState>);

  return store
    .select((state) => ({
      token: state.auth.token,
      loading: state.auth.loading,
    }))
    .pipe(
      take(1),
      map(({ token, loading }) => {
        if (loading) {
          return false;
        }

        if (!token) {
          router.navigateByUrl('/login');
          return false;
        }
        return true;
      })
    );
};
