import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopRatedProfessionalCardComponent } from '../cards/top-rated-professional/top-rated-professional-card.component';
import { ProfessionalDetails } from '../../models/professional.model';

@Component({
    selector: 'app-top-rated-professionals',
    standalone: true,
    imports: [CommonModule, TopRatedProfessionalCardComponent],
    templateUrl: './top-rated-professionals.component.html',
    styleUrls: ['./top-rated-professionals.component.css']
})
export class TopRatedProfessionalsComponent {
    professionals: ProfessionalDetails[] = [
        {
            id: '1',
            name: 'Sarah Johnson',
            category: 'Plumbing',
            rating: 4.9,
            reviewCount: 127,
            hourlyRate: 85,
            yearsExperience: 8,
            avatarUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%234a90e2"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="white"%3ESJ%3C/text%3E%3C/svg%3E',
            isVerified: true
        },
        {
            id: '2',
            name: 'Mike Rodriguez',
            category: 'Electrical',
            rating: 4.8,
            reviewCount: 89,
            hourlyRate: 95,
            yearsExperience: 12,
            avatarUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23f5a623"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="white"%3EMR%3C/text%3E%3C/svg%3E',
            isVerified: true
        },
        {
            id: '3',
            name: 'Emma Chen',
            category: 'Cleaning',
            rating: 4.9,
            reviewCount: 156,
            hourlyRate: 45,
            yearsExperience: 5,
            avatarUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%237ed321"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="white"%3EEC%3C/text%3E%3C/svg%3E',
            isVerified: true
        },
        {
            id: '4',
            name: 'David Martinez',
            category: 'Handyman',
            rating: 4.7,
            reviewCount: 94,
            hourlyRate: 65,
            yearsExperience: 10,
            avatarUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23bd10e0"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="white"%3EDM%3C/text%3E%3C/svg%3E',
            isVerified: true
        },
        {
            id: '5',
            name: 'Lisa Thompson',
            category: 'Gardening',
            rating: 4.8,
            reviewCount: 73,
            hourlyRate: 55,
            yearsExperience: 7,
            avatarUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%2350e3c2"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="white"%3ELT%3C/text%3E%3C/svg%3E',
            isVerified: true
        },
        {
            id: '6',
            name: 'James Wilson',
            category: 'Carpentry',
            rating: 4.9,
            reviewCount: 112,
            hourlyRate: 80,
            yearsExperience: 15,
            avatarUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23d0021b"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="white"%3EJW%3C/text%3E%3C/svg%3E',
            isVerified: true
        }
    ];

    onViewAll(): void {
        console.log('View all professionals clicked');
        // Navigate to professionals listing page
    }
}