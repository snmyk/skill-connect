import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfessionalCardComponent } from '../../components/cards/professionals/professional-card.component';
import { ProfessionalDetails } from '../../models/professional.model';

@Component({
    selector: 'app-browse-professionals',
    standalone: true,
    imports: [CommonModule, FormsModule, ProfessionalCardComponent],
    templateUrl: './browse-professionals.component.html',
    styleUrls: ['./browse-professionals.component.css']
})
export class BrowseProfessionalsComponent implements OnInit {
    searchQuery = '';
    sortBy = 'rating';
    selectedCategory = 'All';

    categories = ['All', 'Plumbing', 'Electrical', 'Cleaning', 'Handyman', 'Gardening', 'Carpentry'];

    allProfessionals: ProfessionalDetails[] = [
        {
            id: '1',
            name: 'Sarah Johnson',
            category: 'Plumbing',
            location: 'Downtown',
            rating: 4.9,
            reviewCount: 127,
            hourlyRate: 85,
            yearsExperience: 8,
            avatarUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%234a90e2"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="white"%3ESJ%3C/text%3E%3C/svg%3E',
            isVerified: true,
            availability: 'today',
            skills: ['Pipe Repair', 'Installation', 'Emergency Service']
        },
        {
            id: '2',
            name: 'Emma Chen',
            category: 'Cleaning',
            location: 'Uptown',
            rating: 4.9,
            reviewCount: 156,
            hourlyRate: 45,
            yearsExperience: 5,
            avatarUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%237ed321"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="white"%3EEC%3C/text%3E%3C/svg%3E',
            isVerified: true,
            availability: 'today',
            skills: ['Deep Cleaning', 'Regular Maintenance', 'Eco-Friendly']
        },
        {
            id: '3',
            name: 'James Wilson',
            category: 'Carpentry',
            location: 'Downtown',
            rating: 4.9,
            reviewCount: 68,
            hourlyRate: 75,
            yearsExperience: 15,
            avatarUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23d0021b"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="white"%3EJW%3C/text%3E%3C/svg%3E',
            isVerified: true,
            availability: 'tomorrow',
            skills: ['Custom Furniture', 'Repairs', 'Installation']
        },
        {
            id: '4',
            name: 'Mike Rodriguez',
            category: 'Electrical',
            location: 'Midtown',
            rating: 4.8,
            reviewCount: 89,
            hourlyRate: 95,
            yearsExperience: 12,
            avatarUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23f5a623"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="white"%3EMR%3C/text%3E%3C/svg%3E',
            isVerified: true,
            availability: 'today',
            skills: ['Wiring', 'Panel Upgrades', 'Troubleshooting']
        },
        {
            id: '5',
            name: 'David Martinez',
            category: 'Handyman',
            location: 'Westside',
            rating: 4.7,
            reviewCount: 94,
            hourlyRate: 65,
            yearsExperience: 10,
            avatarUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%23bd10e0"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="white"%3EDM%3C/text%3E%3C/svg%3E',
            isVerified: true,
            availability: 'tomorrow',
            skills: ['General Repairs', 'Assembly', 'Maintenance']
        },
        {
            id: '6',
            name: 'Lisa Thompson',
            category: 'Gardening',
            location: 'Eastside',
            rating: 4.8,
            reviewCount: 73,
            hourlyRate: 55,
            yearsExperience: 7,
            avatarUrl: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"%3E%3Ccircle cx="50" cy="50" r="50" fill="%2350e3c2"/%3E%3Ctext x="50" y="50" text-anchor="middle" dy=".3em" font-size="40" fill="white"%3ELT%3C/text%3E%3C/svg%3E',
            isVerified: true,
            availability: 'today',
            skills: ['Landscaping', 'Lawn Care', 'Garden Design']
        }
    ];

    filteredProfessionals: ProfessionalDetails[] = [];

    ngOnInit() {
        this.filterProfessionals();
    }

    onSearchChange() {
        this.filterProfessionals();
    }

    onSortChange() {
        this.filterProfessionals();
    }

    onCategorySelect(category: string) {
        this.selectedCategory = category;
        this.filterProfessionals();
    }

    filterProfessionals() {
        let filtered = [...this.allProfessionals];

        // Filter by category
        if (this.selectedCategory !== 'All') {
            filtered = filtered.filter(p => p.category === this.selectedCategory);
        }

        // Filter by search query
        if (this.searchQuery.trim()) {
            const query = this.searchQuery.toLowerCase();
            filtered = filtered.filter(p =>
            p.name.toLowerCase().includes(query) ||
            p.category.toLowerCase().includes(query) ||
            p?.skills?.some(s => s.toLowerCase().includes(query))
            );
        }

        // Sort
        filtered.sort((a, b) => {
            switch (this.sortBy) {
            case 'rating':
                return b.rating - a.rating;
            case 'price-low':
                return a.hourlyRate - b.hourlyRate;
            case 'price-high':
                return b.hourlyRate - a.hourlyRate;
            case 'experience':
                return b.yearsExperience - a.yearsExperience;
            default:
                return 0;
            }
        });

        this.filteredProfessionals = filtered;
    }

    onViewProfile(id: string) {
        console.log('View profile:', id);
        // Navigate to profile page
    }

    onContact(id: string) {
        console.log('Contact professional:', id);
        // Open contact modal or navigate to contact page
    }
}