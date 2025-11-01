import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalApplication } from '../../../models/professional/professional-application.model';

@Component({
  selector: 'app-step-three',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css'],
})
export class StepThreeComponent {
  @Input() formData!: ProfessionalApplication;
  @Input() isValid: boolean = false;
  @Input() canSubmit: boolean = false;
  @Output() previous = new EventEmitter<void>();
  @Output() submit = new EventEmitter<void>();
  imagePreviewUrl: string | null = null;

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      this.formData.profilePhoto = input.files[0];
      console.log('File selected:', input.files[0].name);

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imagePreviewUrl = e.target?.result as string;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  onPrevious() {
    this.previous.emit();
  }

  onSubmit() {
    if (this.canSubmit) {
      this.submit.emit();
    }
  }

  getFieldErrors(): string[] {
    const errors: string[] = [];
    if (!this.formData.profilePhoto) errors.push('Profile photo is required');
    return errors;
  }
}
