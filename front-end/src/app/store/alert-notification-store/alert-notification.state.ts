import { AlertConfig } from "../../models/alert-config.model";
export interface AlertNotificationState {
    currentAlert: AlertConfig | null;
    isDisplayed: boolean;
}

export const initialAlertNotificationState: AlertNotificationState = {
    currentAlert: null,
    isDisplayed: false
};