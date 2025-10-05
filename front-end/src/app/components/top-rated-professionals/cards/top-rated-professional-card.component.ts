import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Professional } from '../../../models/professional.model';

@Component({
  selector: 'app-top-rated-professional-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-rated-professional-card.component.html',
  styleUrls: ['./top-rated-professional-card.component.css']
})
export class TopRatedProfessionalCardComponent {
  @Input() professional!: Professional;
  onViewProfile(): void {
    console.log(`Viewing profile for ${this.professional.name}`);
    // Navigate to professional detail page
  }
}
