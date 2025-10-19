import { createFeatureSelector, createSelector } from "@ngrx/store";

import { AlertNotificationState } from "./alert-notification.state";

// Feature selector to get the alert notification state slice
export const selectAlertNotificationState = createFeatureSelector<AlertNotificationState>("alertNotification");

// Selector to get the current alert
export const selectCurrentAlert = createSelector(
    selectAlertNotificationState,
    (state) => state.currentAlert
);

// Selector to get the alert display status
export const selectIsAlertDisplayed = createSelector(
    selectAlertNotificationState,
    (state) => state.isDisplayed
);