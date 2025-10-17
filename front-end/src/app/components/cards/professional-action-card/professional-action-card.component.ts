import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from '../../star-rating/star-rating.component';
import { ProfessionalDetails } from '../../../models/professional.model';

@Component({
  selector: 'app-professional-action-card',
  standalone: true,
  imports: [CommonModule, StarRatingComponent],
  templateUrl: './professional-action-card.component.html',
  styleUrl: './professional-action-card.component.css'
})
export class ProfessionalActionCardComponent {
  @Input() profile!: ProfessionalDetails;
  @Output() contact = new EventEmitter<void>();
  @Output() requestQuote = new EventEmitter<void>();
  @Output() save = new EventEmitter<void>();

  isSaved = false;

  onContact() {
    this.contact.emit();
  }

  onRequestQuote() {
    this.requestQuote.emit();
  }

  onSave() {
    this.isSaved = !this.isSaved;
    this.save.emit();
  }
}
