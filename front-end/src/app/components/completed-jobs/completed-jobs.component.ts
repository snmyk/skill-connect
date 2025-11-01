import { Component, Input } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Job } from '../../models/account/job.model';

@Component({
  selector: 'app-completed-jobs',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './completed-jobs.component.html',
  styleUrl: './completed-jobs.component.css',
})
export class CompletedJobsComponent {
  @Input() completedJobs: Job[] = [];

  onJobClick(job: Job) {
    console.log('Job clicked:', job);
    // Navigate to job detail
  }
}
