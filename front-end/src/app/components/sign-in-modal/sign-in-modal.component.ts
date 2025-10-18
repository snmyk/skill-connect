import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignInCredentials } from '../../models/sign-in.model';

@Component({
  selector: 'app-sign-in-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in-modal.component.html',
  styleUrl: './sign-in-modal.component.css'
})
export class SignInModalComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() signIn = new EventEmitter<SignInCredentials>();
  @Output() forgotPassword = new EventEmitter<void>();

  credentials: SignInCredentials = {
    email: '',
    password: '',
    rememberMe: false
  };

  onClose() {
    this.close.emit();
    this.resetForm();
  }

  onOverlayClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  onSubmit() {
    if (this.isFormValid()) {
      this.signIn.emit({ ...this.credentials });
      this.onClose();
    }
  }

  onForgotPassword(event: Event) {
    event.preventDefault();
    this.forgotPassword.emit();
  }

  isFormValid(): boolean {
    return !!(this.credentials.email && this.credentials.password);
  }

  resetForm() {
    this.credentials = {
      email: '',
      password: '',
      rememberMe: false
    };
  }
}
