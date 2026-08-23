import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.css']
})
export class CtaSectionComponent {
    onFindProfessional(): void {
        console.log('Find a Professional clicked');
        // Navigate to browse professionals
    }

    onJoinProfessional(): void {
        console.log('Join as Professional clicked');
        // Navigate to professional signup
    }
}