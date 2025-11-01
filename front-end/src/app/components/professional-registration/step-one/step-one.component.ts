import {
  Component,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfessionalApplication } from '../../../models/professional/professional-application.model';
import { Subject, debounceTime, takeUntil } from 'rxjs';
import { updateRegistrationDetails } from '../../../store/registration-store/registration.action';

@Component({
  selector: 'app-step-one',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css'],
})
export class StepOneComponent implements OnInit, OnDestroy {
  @Input() formData!: ProfessionalApplication;
  @Input() isValid: boolean = false;
  @Output() next = new EventEmitter<void>();

  private destroy$ = new Subject<void>();
  private formChanged$ = new Subject<void>();

  constructor() {}

  ngOnInit() {
    // Auto-save when form data changes (debounced to avoid excessive saves)
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onFormChange() {
    this.formChanged$.next();
  }

  onNext() {
    if (this.isValid) {
      this.next.emit();
    }
  }

  getFieldErrors(): string[] {
    const errors: string[] = [];
    if (!this.formData.firstName?.trim()) errors.push('First name is required');
    if (!this.formData.lastName?.trim()) errors.push('Last name is required');
    if (!this.formData.email?.trim()) errors.push('Email is required');
    else if (!this.isValidEmail(this.formData.email))
      errors.push('Please enter a valid email address');
    if (!this.formData.phone?.trim()) errors.push('Phone number is required');
    if (!this.formData.location?.trim()) errors.push('Location is required');
    return errors;
  }

  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}
