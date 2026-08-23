import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-step-indicator',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './step-indicator.component.html',
    styleUrls: ['./step-indicator.component.css'],
})
export class StepIndicatorComponent {
    @Input() currentStep: number = 1;
    @Input() totalSteps: number = 3;
    @Input() stepLabel: string = '';

    get steps(): number[] {
        return Array.from({ length: this.totalSteps }, (_, i) => i + 1);
    }
}