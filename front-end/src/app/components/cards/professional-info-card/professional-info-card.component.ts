import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalDetails } from '../../../models/professional.model';
import { StarRatingComponent } from '../../star-rating/star-rating.component';

@Component({
  selector: 'app-professional-info-card',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './professional-info-card.component.html',
  styleUrls: ['./professional-info-card.component.css']
})
export class ProfessionalInfoCardComponent {
  @Input() profile!: ProfessionalDetails;

  onImageError(event: any): void {
    event.target.src = 'assets/images/default-avatar.png';
  }

  getAvailabilityText(availability: 'today' | 'tomorrow' | 'unavailable'): string {
    switch (availability) {
      case 'today':
        return 'Available today';
      case 'tomorrow':
        return 'Available tomorrow';
      case 'unavailable':
        return 'Currently unavailable';
      default:
        return 'Availability unknown';
    }
  }
}
