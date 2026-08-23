import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { CompletedJobCardComponent } from '../cards/completed-job-card/completed-job-card.component';
import { Job } from '../../models/account/job.model';

@Component({
  selector: 'app-completed-jobs',
  standalone: true,
  imports: [CommonModule, CompletedJobCardComponent, NgFor],
  templateUrl: './completed-jobs.component.html',
  styleUrl: './completed-jobs.component.css',
})
export class CompletedJobsComponent {
  @Input() completedJobs: Job[] = [];
}
