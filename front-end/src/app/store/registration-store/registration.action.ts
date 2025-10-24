import { createAction, props } from '@ngrx/store';
import { ProfessionalApplication } from '../../models/professional/professional-application.model';
import { RegistrationState } from './registration.state';

export const register = createAction('[Registration] Register');
export const updateRegistrationDetails = createAction(
  '[Registration] Update Details',
  props<{ formData: ProfessionalApplication }>()
);
export const saveProgress = createAction(
  '[Registration] Save Progress',
  props<{ registrationState: RegistrationState }>()
);
export const completeRegistration = createAction('[Registration] Complete');
