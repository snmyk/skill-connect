import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forgot-password-modal.component.html',
  styleUrl: './forgot-password-modal.component.css'
})
export class ForgotPasswordModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() sendResetLink = new EventEmitter<string>();
  @Output() backToSignIn = new EventEmitter<void>();

  email = '';
  errorMessage = '';
  isLoading = false;

  onClose() {
    this.close.emit();
    this.resetForm();
  }

  onOverlayClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  onBackToSignIn() {
    this.backToSignIn.emit();
    this.onClose();
  }

  async onSubmit() {
    if (!this.email) {
      this.errorMessage = 'Please enter your email address.';
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';

    // Simulate API call
    setTimeout(() => {
      // Simulate random failure for demo
      if (Math.random() > 0.7) {
        this.errorMessage = 'Failed to send reset link. Please try again.';
        this.isLoading = false;
      } else {
        this.sendResetLink.emit(this.email);
        this.isLoading = false;
        this.onClose();
      }
    }, 1000);
  }

  resetForm() {
    this.email = '';
    this.errorMessage = '';
    this.isLoading = false;
  }
}
