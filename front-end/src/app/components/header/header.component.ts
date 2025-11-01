import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';
import { ForgotPasswordModalComponent } from '../forgot-password-modal/forgot-password-modal.component';
import { SignInCredentials } from '../../models/auth/sign-in.model';
import {
  selectIsAuthenticated,
  selectTriggerAuthenticationModal,
} from '../../store/auth/auth.selectors';
import { initAuthFromCookie } from '../../store/auth/auth.actions';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SignInModalComponent, ForgotPasswordModalComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isSignInModalOpen = false;
  isForgotPasswordModalOpen = false;
  isAuthenticated = false;
  authenticated$: Observable<boolean>;
  triggerAuthenticationModal$: Observable<boolean>;

  constructor(private store: Store) {
    this.authenticated$ = this.store.select(selectIsAuthenticated);
    this.triggerAuthenticationModal$ = this.store.select(
      selectTriggerAuthenticationModal
    );
  }
  ngOnInit() {
    // subscribe to authentication state
    this.authenticated$.subscribe((isAuthenticated) => {
      this.isAuthenticated = isAuthenticated;
      console.log('HeaderComponent: Auth state changed:', isAuthenticated);

      if (!isAuthenticated) {
        this.store.dispatch(initAuthFromCookie());
      }
    });

    this.triggerAuthenticationModal$.subscribe((trigger) => {
      if (trigger) {
        console.log(
          'HeaderComponent: Triggering sign-in modal due to auth requirement'
        );
        this.openSignInModal();
      }
    });
  }

  openSignInModal() {
    this.isSignInModalOpen = true;
  }

  closeSignInModal() {
    this.isSignInModalOpen = false;
  }

  handleSignIn(credentials: SignInCredentials) {
    console.log('Sign in:', credentials);
    // Call authentication API
    alert(`Signing in as ${credentials.email}`);
  }

  handleForgotPassword() {
    console.log('Forgot password clicked');
    this.closeSignInModal();
    // Open forgot password modal or navigate to reset page
    this.isForgotPasswordModalOpen = true;
    this.isSignInModalOpen = false;
  }

  handleSignUp() {
    console.log('Sign up clicked');
    this.closeSignInModal();
    // Open sign up modal or navigate to registration page
  }

  handleSendResetLink(email: string) {
    alert(`Reset link sent to ${email}!`);
  }
  closeForgotPasswordModal() {
    this.isForgotPasswordModalOpen = false;
  }

  handleBackToSignIn() {
    this.isSignInModalOpen = true;
    this.isForgotPasswordModalOpen = false;
  }
}
