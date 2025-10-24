import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProfessionalDetails } from '../../../models/professional/professional.model';

@Component({
  selector: 'app-top-rated-professional-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-rated-professional-card.component.html',
  styleUrls: ['./top-rated-professional-card.component.css'],
})
export class TopRatedProfessionalCardComponent {
  @Input() professional!: ProfessionalDetails;
  constructor(private router: Router) {}
  onViewProfile(professional: ProfessionalDetails): void {
    console.log(`Viewing profile for ${professional.name}`);
    // Navigate to professional detail page
    this.router.navigate(['/browse/professionals', professional.id]);
  }
}
