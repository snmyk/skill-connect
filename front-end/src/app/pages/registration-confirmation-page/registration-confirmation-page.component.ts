import { Component } from '@angular/core';
import { ConfirmationComponent } from '../../components/confirmation/confirmation.component';

@Component({
  selector: 'app-registration-confirmation-page',
  standalone: true,
  imports: [ConfirmationComponent],
  templateUrl: './registration-confirmation-page.component.html',
  styleUrl: './registration-confirmation-page.component.css',
})
export class RegistrationConfirmationPageComponent {}
