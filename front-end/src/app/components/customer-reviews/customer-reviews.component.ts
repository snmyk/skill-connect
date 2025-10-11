import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerReview } from '../../models/customer-review.model';
import { ReviewCardComponent } from '../cards/review-card/review-card.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';

@Component({
  selector: 'app-customer-reviews',
  standalone: true,
  imports: [CommonModule, ReviewCardComponent, StarRatingComponent],
  templateUrl: './customer-reviews.component.html',
  styleUrl: './customer-reviews.component.css'
})
export class CustomerReviewsComponent {
  overallRating = 4.8;
  reviews: CustomerReview[] = [
    {
      id: '1',
      customerName: 'John Doe',
      rating: 5,
      comment: 'Great service! Highly recommended.',
      date: "2024-06-15",
      serviceType: 'Panel Upgrade'
    },
    {
      id: '2',
      customerName: 'Jane Smith',
      rating: 4,
      comment: 'Good experience, but could be better.',
      date: "2024-06-15",
      serviceType: 'Light Installation'
    },
    {
      id: '3',
      customerName: 'Michael Johnson',
      rating: 3,
      comment: 'Average service. Could be better.',
      date: "2024-06-15",
      serviceType: 'Air Duct Cleaning'
    }
  ];
}
