import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerReview } from '../../../models/customer-review.model';
import { StarRatingComponent } from '../../star-rating/star-rating.component';

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './review-card.component.html',
  styleUrl: './review-card.component.css'
})
export class ReviewCardComponent {
  @Input() review!: CustomerReview;
}
