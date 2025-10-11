import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RegistrationState } from './registration.state';

// Feature selector to get the registration state slice
export const selectRegistrationState = createFeatureSelector<RegistrationState>('registration');

// Selectors for individual properties
export const selectRegistrationFormData = createSelector(
    selectRegistrationState,
    (state: RegistrationState) => state.formData
);

export const selectRegistrationStep = createSelector(
    selectRegistrationState,
    (state: RegistrationState) => state.step
);

export const selectRegistrationIsValid = createSelector(
    selectRegistrationState,
    (state: RegistrationState) => state.isValid
);

export const selectRegistrationCanSubmit = createSelector(
    selectRegistrationState,
    (state: RegistrationState) => state.canSubmit
);

export const selectRegistrationIsComplete = createSelector(
    selectRegistrationState,
    (state: RegistrationState) => state.isComplete
);

// Selector for the entire registration state
export const selectFullRegistrationState = createSelector(
    selectRegistrationState,
    (state: RegistrationState) => state
);