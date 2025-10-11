import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessionalInfoCardComponent } from '../../components/cards/professional-info-card/professional-info-card.component';
import { ProfessionalActionCardComponent } from '../../components/cards/professional-action-card/professional-action-card.component';
import { CustomerReviewsComponent } from '../../components/customer-reviews/customer-reviews.component';
import { ProfessionalDetails } from '../../models/professional.model';

@Component({
  selector: 'app-view-professonal-profile',
  standalone: true,
  imports: [CommonModule, ProfessionalInfoCardComponent, ProfessionalActionCardComponent, CustomerReviewsComponent],
  templateUrl: './view-professonal-profile.component.html',
  styleUrl: './view-professonal-profile.component.css'
})
export class ViewProfessonalProfileComponent {
  profile: ProfessionalDetails = {
      id: '1',
      name: 'Mike Rodriguez',
      category: 'Electrical',
      location: 'Westside',
      rating: 4.8,
      reviewCount: 89,
      hourlyRate: 95,
      yearsExperience: 12,
      avatarUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23f5a623"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="white"%3EMR%3C/text%3E%3C/svg%3E',
      isVerified: true,
      responseTime: '1 hour',
      jobsCompleted: 280,
      bio: 'Licensed electrician with 12 years of experience in residential and commercial electrical work. Expert in electrical installations, troubleshooting, and safety inspections. Committed to providing safe and reliable electrical solutions.',
      servicesOffered: [
        { name: 'Electrical (Primary)', isPrimary: true },
        { name: 'Wiring Installation', isPrimary: false },
        { name: 'Panel Upgrades', isPrimary: false },
        { name: 'Lighting Installation', isPrimary: false },
        { name: 'Safety Inspections', isPrimary: false }
      ],
      badges: ['Background checked', 'Licensed & insured', '24/7 support']
    };

    onContact() {
      console.log('Contact professional');
    }

    onRequestQuote() {
      console.log('Request quote');
    }

    onSave() {
      console.log('Save professional');
    }
}
