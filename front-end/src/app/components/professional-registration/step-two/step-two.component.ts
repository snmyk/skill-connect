import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfessionalApplication } from '../../../models/professional/professional-application.model';

@Component({
  selector: 'app-step-two',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css'],
})
export class StepTwoComponent {
  @Input() formData!: ProfessionalApplication;
  @Input() isValid: boolean = false;
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  onNext() {
    if (this.isValid) {
      this.next.emit();
    }
  }

  onPrevious() {
    this.previous.emit();
  }

  getFieldErrors(): string[] {
    const errors: string[] = [];
    if (!this.formData.primaryService?.trim())
      errors.push('Primary service is required');
    if (!this.formData.yearsExperience?.trim())
      errors.push('Years of experience is required');
    if (!this.formData.hourlyRate || this.formData.hourlyRate <= 0)
      errors.push('Valid hourly rate is required');
    if (!this.formData.availability?.trim())
      errors.push('Availability is required');
    if (!this.formData.skills?.trim()) errors.push('Skills are required');
    if (!this.formData.bio?.trim()) errors.push('Bio is required');
    return errors;
  }
}
