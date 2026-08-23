import { createAction, props } from '@ngrx/store';
import { AlertNotificationState } from './alert-notification.state';
import { AlertConfig } from '../../models/alert/alert-config.model';

// Existing actions
export const showAlert = createAction(
  '[Alert] Show',
  props<{ alert: AlertConfig }>()
);

export const hideAlert = createAction('[Alert] Hide');

export const setAlertState = createAction(
  '[Alert] Set State',
  props<{ state: AlertNotificationState }>()
);

export const dismissAlert = createAction('[Alert] Dismiss Alert');

// Missing actions needed by effects
export const clearAlert = createAction('[Alert] Clear Alert');

export const showSuccessAlert = createAction(
  '[Alert] Show Success Alert',
  props<{ message: string; duration?: number }>()
);

export const showErrorAlert = createAction(
  '[Alert] Show Error Alert',
  props<{ message: string; duration?: number }>()
);

export const showWarningAlert = createAction(
  '[Alert] Show Warning Alert',
  props<{ message: string; duration?: number }>()
);

export const autoDismissAlert = createAction(
  '[Alert] Auto Dismiss Alert',
  props<{ alertId: string }>()
);
