import { createAction, props } from '@ngrx/store';
import { UserModel } from '../../models/user/user.model'; // Update import
import { LoginResponse } from '../../models/auth/login-response.model';
import { send } from 'process';

export const login = createAction(
  '[Auth] Login',
  props<{ email: string; password: string }>()
);

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
  props<{ user: LoginResponse }>()
);

export const triggerAuthenticationModal = createAction(
  '[Auth] Trigger Authentication Modal',
  props<{ trigger: boolean }>()
);

export const resetPassword = createAction(
  '[Auth] Reset Password',
  props<{ email: string; newPassword: string }>()
);

export const resetPasswordSuccess = createAction(
  '[Auth] Reset Password Success'
);

export const resetPasswordFailure = createAction(
  '[Auth] Reset Password Failure',
  props<{ error: string }>()
);

export const sendPasswordResetEmail = createAction(
  '[Auth] Send Password Reset Email',
  props<{ email: string }>()
);

export const sendPasswordResetEmailSuccess = createAction(
  '[Auth] Send Password Reset Email Success'
);

export const sendPasswordResetEmailFailure = createAction(
  '[Auth] Send Password Reset Email Failure',
  props<{ error: string }>()
);
