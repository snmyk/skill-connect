import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-completed-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './completed-job-card.component.html',
  styleUrl: './completed-job-card.component.css',
})
export class CompletedJobCardComponent {
  @Input() title!: string;
  @Input() client!: string;
  @Input() jobId!: string;
  @Input() amount!: number;
  @Input() date!: string;
  @Input() rating?: number;
  @Input() review!: string;
}
