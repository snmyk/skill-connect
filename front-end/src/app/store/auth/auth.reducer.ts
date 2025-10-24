import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,

  on(AuthActions.login, (state) => ({
    ...state,
  })),

  on(AuthActions.loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
  })),

  on(AuthActions.logout, (state) => ({
    ...state,
    user: null,
    isAuthenticated: false,
  })),

  on(AuthActions.setLoading, (state, { loading }) => ({
    ...state,
    loading,
  }))
);
