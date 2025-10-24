import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';

export type { AuthState };

export const authReducer = createReducer(
  initialAuthState,

  // Handle successful login
  on(AuthActions.loginSuccess, (state, { loginResponse }) => ({
    ...state,
    loginResponse,
    isAuthenticated: true,
    loading: false,
    error: null,
  })),

  // Handle login failure
  on(AuthActions.loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    isAuthenticated: false,
    loading: false,
    error,
  })),

  // Handle logout
  on(AuthActions.logout, (state) => ({
    ...state,
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  })),

  // Handle logout success
  on(AuthActions.logoutSuccess, (state) => ({
    ...state,
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  })),

  // Handle init auth from cookie
  on(AuthActions.initAuthFromCookie, (state) => ({
    ...state,
    loading: true,
  })),

  // Handle successful auth init from cookie
  on(AuthActions.initAuthFromCookieSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    loading: false,
    error: null,
  })),

  // Handle loading state changes
  on(AuthActions.setLoading, (state, { loading }) => ({
    ...state,
    loading,
  }))
);
