import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { registrationReducer, RegistrationState } from './registration-store/registration.reducer';
import { alertNotificationReducer, AlertNotificationState } from './alert-notification-store/alert-notification.reducer';

// Define the overall state interface
export interface AppState {
  registration: RegistrationState;
  alertNotification: AlertNotificationState;
}

export const reducers: ActionReducerMap<AppState> = {
  registration: registrationReducer,
  alertNotification: alertNotificationReducer
};
