import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../models/user/user.model';

export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: UserModel }>()
);

export const loginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: string }>()
);
export const logout = createAction('[Auth] Logout');

export const logoutSuccess = createAction('[Auth] Logout Success');

export const initAuthFromCookie = createAction('[Auth] Init Auth From Cookie');

export const initAuthFromCookieSuccess = createAction(
  '[Auth] Init Auth From Cookie Success',
  props<{ user: UserModel }>()
);

export const setLoading = createAction(
  '[Auth] Set Loading',
  props<{ loading: boolean }>()
);
