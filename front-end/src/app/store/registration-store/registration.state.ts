import { ProfessionalApplication } from '../../models/professional-application.model';

export interface RegistrationState {
    formData: ProfessionalApplication;
    step: number;
    isValid: boolean;
    canSubmit: boolean;
    isComplete: boolean;
}

export const initialState: RegistrationState = {
    formData: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        primaryService: '',
        yearsExperience: '',
        hourlyRate: 0,
        availability: '',
        skills: '',
        bio: '',
        profilePhoto: null
    } as ProfessionalApplication,
    step: 1,
    isValid: false,
    canSubmit: false,
    isComplete: false
};