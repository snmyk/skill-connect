import { createAction, props } from '@ngrx/store';
import { ProfessionalApplication } from '../../models/professional/professional-application.model';
import { RegistrationState } from './registration.state';

export const register = createAction(
  '[Registration] Register',
  props<{ professionalApplication: ProfessionalApplication }>()
);

export const updateRegistrationDetails = createAction(
  '[Registration] Update Details',
  props<{ formData: ProfessionalApplication }>()
);

export const saveProgress = createAction(
  '[Registration] Save Progress',
  props<{ registrationState: RegistrationState }>()
);

export const completeRegistration = createAction('[Registration] Complete');

export const registrationSuccess = createAction(
  '[Registration] Registration Success'
);

export const registrationFailure = createAction(
  '[Registration] Registration Failure',
  props<{ error: string }>()
);
