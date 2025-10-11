import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { registrationReducer, RegistrationState } from './registration-store/registration.reducer';

// Define the overall state interface
export interface AppState {
  registration: RegistrationState;
}

export const reducers: ActionReducerMap<AppState> = {
  registration: registrationReducer
};
