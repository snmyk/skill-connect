import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../models/user/user.model'; // Update import
import { LoginResponse } from '../../models/auth/login-response.model';

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ loginResponse: LoginResponse }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);

// Add missing actions
export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success');

export const setLoading = createAction(
  '[Auth] Set Loading',
  props<{ loading: boolean }>()
);

export const initAuthFromCookie = createAction('[Auth] Init Auth From Cookie');

export const initAuthFromCookieSuccess = createAction(
  '[Auth] Init Auth From Cookie Success',
  props<{ user: UserModel }>()
);

export const triggerAuthenticationModal = createAction(
  '[Auth] Trigger Authentication Modal',
  props<{ trigger: boolean }>()
);
