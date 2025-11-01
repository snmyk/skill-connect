import { createReducer, on } from "@ngrx/store";
import { register, updateRegistrationDetails, saveProgress, completeRegistration } from "./registration.action";
import { RegistrationState, initialState } from "./registration.state";


export type { RegistrationState };

export const registrationReducer = createReducer(
    initialState,
    on(register, (state) => ({ ...state, step: 2 })),
    on(updateRegistrationDetails, (state, { formData }) => ({ ...state, formData })),
    on(saveProgress, (state, { registrationState }) => ({ ...state, ...registrationState })),
    on(completeRegistration, (state) => ({ ...state, isComplete: true }))
);
