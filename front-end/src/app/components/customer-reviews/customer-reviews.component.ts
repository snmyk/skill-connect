import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerReview } from '../../models/customer/customer-review.model';
import { ReviewCardComponent } from '../cards/review-card/review-card.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [CommonModule, ReviewCardComponent, StarRatingComponent],
  templateUrl: './customer-reviews.component.html',
  styleUrl: './customer-reviews.component.css',
})
export class CustomerReviewsComponent {
  overallRating = 4.8;
  reviews: CustomerReview[] = [
    {
      id: '1',
      customerName: 'John Doe',
      rating: 5,
      comment: 'Great service! Highly recommended.',
      date: '2024-06-15',
      serviceType: 'Panel Upgrade',
    },
    {
      id: '2',
      customerName: 'Jane Smith',
      rating: 4,
      comment: 'Good experience, but could be better.',
      date: '2024-06-15',
      serviceType: 'Light Installation',
    },
    {
      id: '3',
      customerName: 'Michael Johnson',
      rating: 3,
      comment: 'Average service. Could be better.',
      date: '2024-06-15',
      serviceType: 'Air Duct Cleaning',
    },
    {
      id: '4',
      customerName: 'Tom Anderson',
      rating: 5,
      serviceType: 'Emergency Repair',
      comment:
        'Emergency electrical repair on Christmas day. Mike was professional and got our power restored quickly.',
      date: '12/25/2023',
    },
    {
      id: '5',
      customerName: 'Rachel Green',
      rating: 4,
      serviceType: 'Wiring Installation',
      comment:
        'Good work on rewiring our basement. Mike was punctual and cleaned up well after the job.',
      date: '12/18/2023',
    },
  ];
}
