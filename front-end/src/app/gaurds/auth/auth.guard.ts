import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, take } from 'rxjs';
import { AppState } from '../../store';
import { triggerAuthenticationModal } from '../../store/auth/auth.actions';

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
        console.log('AuthGuard: Checking auth state', { token, loading });

        if (loading) {
          console.log('AuthGuard: Still loading, denying access');
          return false;
        }

        if (!token) {
          console.log('AuthGuard: No token found, triggering auth modal');
          store.dispatch(triggerAuthenticationModal({ trigger: true }));
          return false;
        }

        console.log('AuthGuard: Token found, allowing access');
        return true;
      })
    );
};
