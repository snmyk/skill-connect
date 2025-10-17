import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { ProfessionalDetails } from '../../../models/professional.model';
import { ContactFormComponent } from '../../contact-form/contact-form.component';
import { ContactFormData } from '../../../models/contact-form.model';

@Component({
  selector: 'app-professional-action-card',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, ContactFormComponent],
  templateUrl: './professional-action-card.component.html',
  styleUrl: './professional-action-card.component.css'
})
export class ProfessionalActionCardComponent {
  @Input() profile!: ProfessionalDetails;
  @Output() contact = new EventEmitter<void>();
  @Output() requestQuote = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  isContactModalOpen = false;
  professionalName = 'Emma Chen';
  services = [
    'Deep Cleaning',
    'Regular Maintenance',
    'Move-in/Move-out Cleaning',
    'Office Cleaning',
    'Carpet Cleaning',
    'Window Cleaning'
  ];

  isSaved = false;

  openContactModal() {
    this.isContactModalOpen = true;
  }

  closeContactModal() {
    this.isContactModalOpen = false;
  }

  onRequestQuote() {
    this.requestQuote.emit();
  }

  onSave() {
    this.isSaved = !this.isSaved;
    this.save.emit();
  }

  handleContactSubmit(formData: ContactFormData) {
    console.log('Contact form submitted:', formData);
    // Send data to API
    alert(`Thank you! Your request has been sent to ${this.professionalName}.`);
  }
}
