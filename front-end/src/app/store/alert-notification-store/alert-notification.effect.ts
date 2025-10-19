import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { timer, EMPTY } from 'rxjs';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import * as AlertActions from './alert-notification.action';

@Injectable()
export class AlertNotificationEffects {
    constructor(private actions$: Actions) {}

    // Effect to handle showAlert action and trigger setAlertState
    showAlert$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AlertActions.showAlert),
            map((action) => {
                console.log('Processing showAlert action:', action.alert);
                return AlertActions.setAlertState({
                    state: {
                        isDisplayed: true,
                        currentAlert: action.alert
                    }
                });
            })
        )
    );

    // Effect to auto-dismiss alerts after a specified duration
    autoDismissAlert$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AlertActions.setAlertState),
            switchMap((action) => {
                console.log('Processing setAlertState action:', action.state);
                // Only start timer if alert is displayed and has duration
                if (action.state.isDisplayed && action.state.currentAlert?.duration) {
                    const duration = action.state.currentAlert.duration;
                    console.log('Starting auto-dismiss timer for', duration, 'ms');
                    
                    return timer(duration).pipe(
                        map(() => {
                            console.log('Auto-dismissing alert');
                            return AlertActions.setAlertState({
                                state: { 
                                    isDisplayed: false, 
                                    currentAlert: null 
                                }
                            });
                        }),
                        takeUntil(
                            this.actions$.pipe(
                                ofType(AlertActions.setAlertState, AlertActions.dismissAlert)
                            )
                        )
                    );
                }
                return EMPTY; // Return EMPTY instead of empty array
            })
        )
    );

    // Effect to handle manual alert dismissal (when user clicks close button)
    manualDismissAlert$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AlertActions.dismissAlert),
            map(() => {
                console.log('Manually dismissing alert');
                return AlertActions.setAlertState({
                    state: { 
                        isDisplayed: false, 
                        currentAlert: null 
                    }
                });
            })
        )
    );

    // Effect to handle alert closed event (for cleanup and callbacks)
    alertClosed$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AlertActions.clearAlert),
            tap(() => {
                console.log('Alert has been closed');
                // You can add additional cleanup logic here
                // Or trigger other actions like navigation
            })
        ),
        { dispatch: false } // This effect doesn't dispatch another action
    );

    // Effect to handle success alerts with custom duration
    showSuccessAlert$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AlertActions.showSuccessAlert),
            map((action) => {
                const alert = {
                    id: Date.now().toString(),
                    type: 'success' as const,
                    message: action.message,
                    duration: action.duration || 4000,
                    isVisible: true,
                    isSuccess: true
                };
                return AlertActions.showAlert({ alert });
            })
        )
    );

    // Effect to handle error alerts with custom duration
    showErrorAlert$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AlertActions.showErrorAlert),
            map((action) => {
                const alert = {
                    id: Date.now().toString(),
                    type: 'error' as const,
                    message: action.message,
                    duration: action.duration || 6000, // Error alerts stay longer
                    isVisible: true,
                    isSuccess: false
                };
                return AlertActions.showAlert({ alert });
            })
        )
    );

    // Effect to handle warning alerts with custom duration
    showWarningAlert$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AlertActions.showWarningAlert),
            map((action: ReturnType<typeof AlertActions.showWarningAlert>) => {
                const alert = {
                    id: Date.now().toString(),
                    type: 'warning' as const,
                    message: action.message,
                    duration: action.duration || 5000,
                    isVisible: true,
                    isSuccess: false
                };
                return AlertActions.showAlert({ alert });
            })
        )
    );
}