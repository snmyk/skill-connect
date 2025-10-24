import { createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const selectAuthState = (state: { auth: AuthState }) => state.auth;

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated
);

export const selectUser = createSelector(
  selectAuthState,
  (state: AuthState) => state.user
);

export const selectAuthToken = createSelector(
  selectAuthState,
  (state: AuthState) => state.token
);

export const selectAuthLoading = createSelector(
  selectAuthState,
  (state: AuthState) => state.loading
);

export const selectAuthStateDetails = createSelector(
  selectAuthState,
  (state: AuthState) => ({
    isAuthenticated: state.isAuthenticated,
    user: state.user,
    loading: state.loading,
  })
);
