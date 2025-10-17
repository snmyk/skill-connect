import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactFormData } from '../../models/contact-form.model';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  @Input() isOpen = false;
  @Input() professionalName = '';
  @Input() availableServices: string[] = [];
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<ContactFormData>();

  formData: ContactFormData = {
    fullName: '',
    email: '',
    mobileNumber: '',
    serviceRequested: '',
    message: ''
  };

  onClose() {
    this.close.emit();
    this.resetForm();
  }

  onOverlayClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.submit.emit({ ...this.formData });
      this.onClose();
    }
  }

  isFormValid(): boolean {
    return !!(
      this.formData.fullName &&
      this.formData.email &&
      this.formData.mobileNumber &&
      this.formData.serviceRequested
    );
  }

  resetForm() {
    this.formData = {
      fullName: '',
      email: '',
      mobileNumber: '',
      serviceRequested: '',
      message: ''
    };
  }
}
