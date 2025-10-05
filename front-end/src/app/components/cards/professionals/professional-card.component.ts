import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalDetails } from '../../../models/professional.model';

@Component({
    selector: 'app-professional-card',
    templateUrl: './professional-card.component.html',
    styleUrls: ['./professional-card.component.css'],
    standalone: true,
    imports: [CommonModule],
})
export class ProfessionalCardComponent {
    @Input() professional!: ProfessionalDetails;
    @Output() viewProfile = new EventEmitter<string>();
    @Output() contact = new EventEmitter<string>();

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
        this.viewProfile.emit(this.professional.id);
    }

    onContact(): void {
        this.contact.emit(this.professional.id);
    }
}
