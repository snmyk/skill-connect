import {
  Component,
  Input,
  Output,
  EventEmitter,
  input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PasswordData } from '../../models/auth/new-password.model';
import { Store } from '@ngrx/store';
import { resetPassword } from '../../store/auth/auth.actions';
import { selectIsSuccessAlert } from '../../store/alert-notification-store/alert-notification.selector';

@Component({
  selector: 'app-new-password-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-password-modal.component.html',
  styleUrl: './new-password-modal.component.css',
})
export class NewPasswordModalComponent implements OnInit {
  @Input() isOpen = false;
  @Input() email: string | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() setPassword = new EventEmitter<PasswordData>();

  ngOnInit() {
    this.store.select(selectIsSuccessAlert).subscribe((isSuccess) => {
      if (isSuccess) {
        this.onClose();
      }
    });
  }

  newPassword = '';
  confirmPassword = '';
  errorMessage = '';
  isLoading = false;

  constructor(private store: Store) {}

  onClose() {
    this.close.emit();
    this.resetForm();
  }

  onOverlayClick(event: MouseEvent) {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  hasMinLength(): boolean {
    return this.newPassword.length >= 8;
  }

  hasUppercase(): boolean {
    return /[A-Z]/.test(this.newPassword);
  }

  hasNumber(): boolean {
    return /[0-9]/.test(this.newPassword);
  }

  isPasswordValid(): boolean {
    return this.hasMinLength() && this.hasUppercase() && this.hasNumber();
  }

  async onSubmit() {
    this.errorMessage = '';

    if (!this.newPassword || !this.confirmPassword) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }

    if (!this.isPasswordValid()) {
      this.errorMessage = 'Password does not meet requirements.';
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match.';
      return;
    }

    this.isLoading = true;

    // Simulate API call
    this.store.dispatch(
      resetPassword({
        email: this.email || '',
        newPassword: this.newPassword,
      })
    );

    this.store.select(selectIsSuccessAlert).subscribe((isSuccess) => {
      if (isSuccess) {
        this.onClose();
      } else {
        this.isLoading = false;
      }
    });
  }

  resetForm() {
    this.newPassword = '';
    this.confirmPassword = '';
    this.errorMessage = '';
    this.isLoading = false;
  }
}
