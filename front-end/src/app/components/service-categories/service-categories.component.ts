import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCategoryCardComponent } from './components/service-category-card.component';
import { ServiceCategory } from '../../models/service-category.model';

@Component({
    selector: 'app-service-categories',
    standalone: true,
    imports: [CommonModule, ServiceCategoryCardComponent],
    templateUrl: './service-categories.component.html',
    styleUrls: ['./service-categories.component.css']
})
export class ServiceCategoriesComponent {
    categories: ServiceCategory[] = [
        {
            id: '1',
            title: 'Plumbing',
            description: 'Professional plumbing services for repairs and installations',
            professionalCount: 24,
            icon: 'plumbing',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%234a90e2" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="white"%3EPlumbing%3C/text%3E%3C/svg%3E'
        },
        {
            id: '2',
            title: 'Electrical',
            description: 'Licensed electricians for all electrical needs',
            professionalCount: 18,
            icon: 'electrical',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23f5a623" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="white"%3EElectrical%3C/text%3E%3C/svg%3E'
        },
        {
            id: '3',
            title: 'Cleaning',
            description: 'Domestic cleaning and housekeeping services',
            professionalCount: 32,
            icon: 'cleaning',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%237ed321" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="white"%3ECleaning%3C/text%3E%3C/svg%3E'
        },
        {
            id: '4',
            title: 'Handyman',
            description: 'General repairs and maintenance services',
            professionalCount: 28,
            icon: 'handyman',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23bd10e0" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="white"%3EHandyman%3C/text%3E%3C/svg%3E'
        },
        {
            id: '5',
            title: 'Gardening',
            description: 'Landscaping and garden maintenance',
            professionalCount: 15,
            icon: 'gardening',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%2350e3c2" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="white"%3EGardening%3C/text%3E%3C/svg%3E'
        },
        {
            id: '6',
            title: 'Carpentry',
            description: 'Custom woodwork and furniture repair',
            professionalCount: 12,
            icon: 'carpentry',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23d0021b" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="white"%3ECarpentry%3C/text%3E%3C/svg%3E'
        },
        {
            id: '7',
            title: 'Carpentry',
            description: 'Custom woodwork and furniture repair',
            professionalCount: 12,
            icon: 'carpentry',
            image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23d0021b" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-size="60" fill="white"%3ECarpentry%3C/text%3E%3C/svg%3E'
        }
    ];
}