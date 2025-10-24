import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SignInCredentials } from '../../models/auth/sign-in.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../store';
import * as AuthActions from '../../store/auth/auth.actions';
import { selectAuthStateDetails } from '../../store/auth/auth.selectors';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { LoginResponse } from '../../models/auth/login-response.model';

@Component({
  selector: 'app-sign-in-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in-modal.component.html',
  styleUrl: './sign-in-modal.component.css',
})
export class SignInModalComponent implements OnInit, OnDestroy {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() signIn = new EventEmitter<SignInCredentials>();
  @Output() forgotPassword = new EventEmitter<void>();

  credentials: SignInCredentials = {
    email: '',
    password: '',
    rememberMe: false,
  };

  authState$: Observable<any>;
  private authSubscription?: Subscription;

  constructor(
    private router: Router,
    private store: Store<AppState>,
    private authService: AuthService
  ) {
    this.authState$ = this.store.select(selectAuthStateDetails);
  }

  ngOnInit() {
    // Subscribe to auth state to handle success/failure
    this.authSubscription = this.authState$.subscribe((authState) => {
      console.log('Auth state changed in sign-in modal:', authState);

      // Close modal on successful login
      if (authState.isAuthenticated && !authState.loading) {
        console.log('Login successful, closing modal');
        this.onClose();
      }

      // Handle login error
      if (authState.error) {
        console.error('Login error:', authState.error);
        // You can show error message here
      }
    });
  }

  ngOnDestroy() {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

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
    console.log('Sign-in form submitted:', {
      email: this.credentials.email,
      password: '***',
      rememberMe: this.credentials.rememberMe,
    });

    if (this.isFormValid()) {
      console.log('Form is valid, dispatching login action');
      console.log('Store object:', this.store); // Add this

      this.authService
        .login(this.credentials.email, this.credentials.password)
        .subscribe({
          next: (response: LoginResponse) => {
            console.log('Login successful:', response);
            this.store.dispatch(
              AuthActions.loginSuccess({
                loginResponse: response,
              })
            );
          },
          error: (error) => {
            console.error('Login error:', error);
            // You can show error message here
          },
        });

      console.log('Login action dispatched successfully');
    } else {
      console.log('Form is invalid');
    }
  }

  onForgotPassword(event: Event) {
    event.preventDefault();
    this.forgotPassword.emit();
  }

  isFormValid(): boolean {
    const isValid = !!(this.credentials.email && this.credentials.password);
    console.log('Form validation result:', isValid);
    return isValid;
  }

  resetForm() {
    this.credentials = {
      email: '',
      password: '',
      rememberMe: false,
    };
  }
}
