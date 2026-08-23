import { createReducer, on } from '@ngrx/store';
import {
  register,
  updateRegistrationDetails,
  saveProgress,
  completeRegistration,
  registrationSuccess,
  registrationFailure,
} from './registration.actions';
import { RegistrationState, initialState } from './registration.state';

export type { RegistrationState };

export const registrationReducer = createReducer(
  initialState,
  on(register, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(registrationSuccess, (state) => ({
    ...state,
    loading: false,
  })),
  on(registrationFailure, (state) => ({
    ...state,
    loading: false,
  })),
  on(updateRegistrationDetails, (state, { formData }) => ({
    ...state,
    formData,
  })),
  on(saveProgress, (state, { registrationState }) => ({
    ...state,
    ...registrationState,
  })),
  on(completeRegistration, (state) => ({ ...state, isComplete: true }))
);
