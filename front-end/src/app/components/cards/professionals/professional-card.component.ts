import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProfessionalDetails } from '../../../models/professional.model';
import { ContactFormComponent } from '../../contact-form/contact-form.component';
import { ContactFormData } from '../../../models/contact-form.model';

@Component({
    selector: 'app-professional-card',
    templateUrl: './professional-card.component.html',
    styleUrls: ['./professional-card.component.css'],
    standalone: true,
    imports: [CommonModule, ContactFormComponent],
})
export class ProfessionalCardComponent {
    @Input() professional!: ProfessionalDetails;
    @Output() viewProfile = new EventEmitter<string>();
    @Output() contact = new EventEmitter<string>();

    constructor(private router: Router) {}

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

    getAvailabilityClass(): string {
    return this.professional.availability === 'today' 
        ? 'available-today' 
        : 'available-tomorrow';
    }

    getAvailabilityText(): string {
    return this.professional.availability === 'today' 
        ? 'Available Today' 
        : 'Available Tomorrow';
    }

    onViewProfile(): void {
        this.router.navigate(['/browse/professionals', this.professional.id]);
    }

    openContactModal() {
    this.isContactModalOpen = true;
    }

    closeContactModal() {
        this.isContactModalOpen = false;
    }

    handleContactSubmit(formData: ContactFormData) {
        console.log('Contact form submitted:', formData);
        // Send data to API
        alert(`Thank you! Your request has been sent to ${this.professionalName}.`);
    }
}
