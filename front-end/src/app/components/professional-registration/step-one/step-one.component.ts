import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfessionalApplication } from '../../../models/professional-application.model';

@Component({
    selector: 'app-step-one',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './step-one.component.html',
    styleUrls: ['./step-one.component.css'],
})
export class StepOneComponent {
    @Input() formData!: ProfessionalApplication;
    @Input() isValid: boolean = false;
    @Output() next = new EventEmitter<void>();

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
        else if (!this.isValidEmail(this.formData.email)) errors.push('Please enter a valid email address');
        if (!this.formData.phone?.trim()) errors.push('Phone number is required');
        if (!this.formData.location?.trim()) errors.push('Location is required');
        return errors;
    }

    isValidEmail(email: string): boolean {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
}