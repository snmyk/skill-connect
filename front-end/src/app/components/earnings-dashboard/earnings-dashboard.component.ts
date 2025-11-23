import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Earning } from '../../models/account/earnings.model';

@Component({
  selector: 'app-earnings-dashboard',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './earnings-dashboard.component.html',
  styleUrl: './earnings-dashboard.component.css',
})
export class EarningsDashboardComponent {
  @Input() earnings!: Earning;
}
