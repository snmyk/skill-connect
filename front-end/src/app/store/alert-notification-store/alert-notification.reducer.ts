import { createReducer, on } from "@ngrx/store";
import { showAlert, hideAlert, setAlertState, clearAlert, dismissAlert, showSuccessAlert, showErrorAlert } from "./alert-notification.action";
import { AlertNotificationState, initialAlertNotificationState } from "./alert-notification.state";

export type { AlertNotificationState };

export const alertNotificationReducer = createReducer(
    initialAlertNotificationState,
    
    on(showSuccessAlert, (state, { message, duration }) => ({ 
        ...state, 
        currentAlert: { 
            message, 
            duration, 
            isSuccess: true 
        }, 
        isDisplayed: true 
    })),
    
    on(showErrorAlert, (state, { message, duration }) => ({ 
        ...state, 
        currentAlert: { 
            message, 
            duration, 
            isSuccess: false 
        }, 
        isDisplayed: true 
    })),

    on(showAlert, (state, { alert }) => ({ 
        ...state, 
        currentAlert: alert, 
        isDisplayed: true 
    })),
    
    on(hideAlert, (state) => ({ 
        ...state, 
        currentAlert: null, 
        isDisplayed: false 
    })),

    on(setAlertState, (state, { 
        state: newState 
    }) => ({ 
        ...state, 
        ...newState 
    })),

    on(clearAlert, (state) => ({ 
        ...state, 
        currentAlert: null, 
        isDisplayed: false 
    })),

    on(dismissAlert, (state) => {
        return { 
            ...state, 
            currentAlert: null, 
            isDisplayed: false 
        };
    })
);