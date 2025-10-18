import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';
import { SignInCredentials } from '../../models/sign-in.model';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule, SignInModalComponent],
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    isSignInModalOpen = false;

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
    }

    handleSignUp() {
        console.log('Sign up clicked');
        this.closeSignInModal();
        // Open sign up modal or navigate to registration page
    }
}