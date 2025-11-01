import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCategory } from '../../../models/service-category/service-category.model';

@Component({
  selector: 'app-service-category-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'service-category-card.component.html',
  styleUrls: ['service-category-card.component.css'],
})
export class ServiceCategoryCardComponent {
  @Input() category!: ServiceCategory;

  getIconSymbol(): string {
    const iconMap: { [key: string]: string } = {
      plumbing: '🔧',
      electrical: '⚡',
      cleaning: '🧹',
      handyman: '🔨',
      gardening: '🌱',
      carpentry: '🪚',
    };
    return iconMap[this.category.icon] || '🔧';
  }

  onCardClick(): void {
    console.log(`Clicked on ${this.category.title}`);
    // Navigate to category detail page
  }
}
