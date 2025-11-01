import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepIndicatorComponent } from '../../components/utils/step-indicator.component';
import { StepOneComponent } from '../../components/professional-registration/step-one/step-one.component';
import { StepTwoComponent } from '../../components/professional-registration/step-two/step-two.component';
import { StepThreeComponent } from '../../components/professional-registration/step-three/step-three.component';
import { ProfessionalApplication } from '../../models/professional/professional-application.model';
import {
  updateRegistrationDetails,
  saveProgress,
} from '../../store/registration-store/registration.action';
import { Store } from '@ngrx/store';
import {
  selectFullRegistrationState,
  selectRegistrationStep,
} from '../../store/registration-store/registration.selector';
import { Observable } from 'rxjs';
import { RegistrationState } from '../../store/registration-store/registration.state';
import { AppState } from '../../store';

@Component({
  selector: 'app-join-professional',
  standalone: true,
  imports: [
    CommonModule,
    StepIndicatorComponent,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent,
  ],
  templateUrl: './join-professional.component.html',
  styleUrls: ['./join-professional.component.css'],
})
export class JoinProfessionalComponent implements OnInit, OnDestroy {
  currentStep = 1;
  showRestoredMessage = false;

  formData$: ProfessionalApplication = {} as ProfessionalApplication;
  registrationState$!: Observable<RegistrationState>;

  constructor(private store: Store<AppState>) {
    this.registrationState$ = this.store.select(selectFullRegistrationState);
  }

  ngOnInit() {
    // Get the full registration state as an observable
    this.registrationState$ = this.store.select(selectFullRegistrationState);

    // Subscribe to see the actual state data
    this.registrationState$.subscribe((state) => {
      if (state.formData) {
        this.formData$ = { ...state.formData };
      }

      // Update current step from state
      this.currentStep = state.step || 1;
    });
  }

  ngOnDestroy() {
    // Auto-save to db
  }

  getStepLabel(): string {
    const labels = [
      'Step 1 of 3: Personal Information',
      'Step 2 of 3: Professional Details',
      'Step 3 of 3: Profile & Verification',
    ];
    return labels[this.currentStep - 1];
  }

  nextStep() {
    if (this.currentStep < 3) {
      this.store.dispatch(
        saveProgress({
          registrationState: {
            step: this.currentStep + 1,
            formData: this.formData$,
            isValid: false,
            canSubmit: false,
            isComplete: false,
          },
        })
      );
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.store.dispatch(
        saveProgress({
          registrationState: {
            step: this.currentStep - 1,
            formData: this.formData$,
            isValid: false,
            canSubmit: false,
            isComplete: false,
          },
        })
      );
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  submitApplication() {
    if (this.isFormValid()) {
      //save to the db
    } else {
      alert('Please complete all required fields before submitting.');
    }
  }

  dismissRestoredMessage(): void {
    this.showRestoredMessage = false;
  }

  // Validation methods
  isStepOneValid(): boolean {
    return !!(
      this.formData$.firstName?.trim() &&
      this.formData$.lastName?.trim() &&
      this.formData$.email?.trim() &&
      this.formData$.phone?.trim() &&
      this.formData$.location?.trim() &&
      this.isValidEmail(this.formData$.email)
    );
  }

  isStepTwoValid(): boolean {
    return !!(
      this.formData$.primaryService?.trim() &&
      this.formData$.yearsExperience?.trim() &&
      this.formData$.hourlyRate > 0 &&
      this.formData$.availability?.trim() &&
      this.formData$.skills?.trim() &&
      this.formData$.bio?.trim()
    );
  }

  isStepThreeValid(): boolean {
    return !!this.formData$.profilePhoto;
  }

  isFormValid(): boolean {
    return (
      this.isStepOneValid() && this.isStepTwoValid() && this.isStepThreeValid()
    );
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
