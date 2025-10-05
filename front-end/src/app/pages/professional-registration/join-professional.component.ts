import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepIndicatorComponent } from '../../components/utils/step-indicator.component';
import { StepOneComponent } from '../../components/professional-registration/step-one/step-one.component';  
import { StepTwoComponent } from '../../components/professional-registration/step-two/step-two.component';
import { StepThreeComponent } from '../../components/professional-registration/step-three/step-three.component';
import { ProfessionalApplication } from '../../models/professional-application.model';

@Component({
    selector: 'app-join-professional',
    standalone: true,
    imports: [CommonModule, StepIndicatorComponent, StepOneComponent, StepTwoComponent, StepThreeComponent],
    templateUrl: './join-professional.component.html',
    styleUrls: ['./join-professional.component.css'],
})
export class JoinProfessionalComponent {
    currentStep = 1;

    formData: ProfessionalApplication = {
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
    };

    getStepLabel(): string {
        const labels = [
            'Step 1 of 3: Personal Information',
            'Step 2 of 3: Professional Details',
            'Step 3 of 3: Profile & Verification'
        ];
        return labels[this.currentStep - 1];
    }

    nextStep() {
        if (this.currentStep < 3) {
            this.currentStep++;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    previousStep() {
        if (this.currentStep > 1) {
            this.currentStep--;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    submitApplication() {
        if (this.isFormValid()) {
            console.log('Application submitted:', this.formData);
            // Handle form submission - send to API
            alert('Application submitted successfully! We will review your profile and get back to you within 1-2 business days.');
        } else {
            alert('Please complete all required fields before submitting.');
        }
    }

    // Validation methods
    isStepOneValid(): boolean {
        return !!(
            this.formData.firstName?.trim() &&
            this.formData.lastName?.trim() &&
            this.formData.email?.trim() &&
            this.formData.phone?.trim() &&
            this.formData.location?.trim() &&
            this.isValidEmail(this.formData.email)
        );
    }

    isStepTwoValid(): boolean {
        return !!(
            this.formData.primaryService?.trim() &&
            this.formData.yearsExperience?.trim() &&
            this.formData.hourlyRate > 0 &&
            this.formData.availability?.trim() &&
            this.formData.skills?.trim() &&
            this.formData.bio?.trim()
        );
    }

    isStepThreeValid(): boolean {
        return !!(this.formData.profilePhoto);
    }

    isFormValid(): boolean {
        return this.isStepOneValid() && this.isStepTwoValid() && this.isStepThreeValid();
    }

    private isValidEmail(email: string): boolean {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    canProceedToNextStep(): boolean {
        switch (this.currentStep) {
            case 1:
                return this.isStepOneValid();
            case 2:
                return this.isStepTwoValid();
            default:
                return false;
        }
    }
}
