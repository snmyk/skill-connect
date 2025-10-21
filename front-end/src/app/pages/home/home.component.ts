import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../../components/search/search.component';
import { ServiceCategoriesComponent } from '../../components/service-categories/service-categories.component';
import { TopRatedProfessionalsComponent } from '../../components/top-rated-professionals/top-rated-professionals.component';
import { CtaSectionComponent } from '../../components/call-to-action/cta-section.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { NewPasswordModalComponent } from '../../components/new-password-modal/new-password-modal.component';
import { PasswordData } from '../../models/new-password.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertNotificationComponent } from '../../components/alert-notification/alert-notification.component';
import { Store } from '@ngrx/store';
import { delay, Observable, Subscription } from 'rxjs';
import { AlertConfig } from '../../models/alert-config.model';
import * as AlertActions from '../../store/alert-notification-store/alert-notification.action';
import * as AlertSelectors from '../../store/alert-notification-store/alert-notification.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    SearchComponent,
    ServiceCategoriesComponent,
    TopRatedProfessionalsComponent,
    CtaSectionComponent,
    FooterComponent,
    NewPasswordModalComponent,
    AlertNotificationComponent,
  ],
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store
  ) {}

  isSetNewPasswordOpen = false;
  isSuccess = false;
  private resetToken: string = '';
  currentAlert$!: Observable<AlertConfig | null>;
  private shouldNavigateAfterAlert = false;
  private alertSubscription?: Subscription;

  ngOnInit(): void {
    // Subscribe to alert state from store
    this.currentAlert$ = this.store.select(AlertSelectors.selectCurrentAlert);

    // Handle navigation after alert dismissal
    this.alertSubscription = this.currentAlert$.subscribe((alert) => {
      console.log('Current alert updated:', alert);
      // Check if we should navigate when alert is dismissed
      if (alert === null && this.shouldNavigateAfterAlert) {
        console.log('Alert dismissed, navigating to /browse/professionals');
        this.shouldNavigateAfterAlert = false; // Reset flag
        this.router.navigate(['/browse/professionals']);
      }
    });

    // Handle password reset token
    this.route.queryParams.subscribe((params) => {
      const token = params['token'];
      if (token) {
        console.log('Password reset token:', token);
        this.resetToken = token;
        if (this.ValidateToken(token)) {
          this.openSetNewPassword();
        }
      }
    });
  }

  ngOnDestroy(): void {
    // Clean up subscription
    if (this.alertSubscription) {
      this.alertSubscription.unsubscribe();
    }
  }

  //Backend token validation example
  private ValidateToken(token: string): boolean {
    // Implement token validation logic here
    return true; // Placeholder
  }

  openSetNewPassword() {
    this.isSetNewPasswordOpen = true;
  }

  closeSetNewPassword() {
    this.isSetNewPasswordOpen = false;
  }

  async handleSetPassword(data: PasswordData) {
    try {
      // Simulate backend API call to update password
      const success = await this.updatePassword(
        data.newPassword,
        this.resetToken
      );

      if (success) {
        console.log('Password updated successfully');
        this.closeSetNewPassword();
        this.showSuccessAndNavigate();
      } else {
        this.showError();
        this.openSetNewPassword();
      }
    } catch (error) {
      console.error('Error updating password:', error);
      this.showError();
    }
  }

  private async updatePassword(
    newPassword: string,
    token: string
  ): Promise<boolean> {
    // Simulate API call with delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate random success/failure for demonstration
        // In real implementation, this would be an actual HTTP request
        console.log('Updating password with token:', token);
        console.log('New password:', newPassword);

        // Simulate 90% success rate
        const success = Math.random() < 0.9;
        resolve(success);
      }, 1500); // Simulate 1.5 second API call
    });
  }

  private showSuccessAndNavigate() {
    this.shouldNavigateAfterAlert = true; // Set flag before showing alert
    this.showSuccess();
    console.log('Success alert shown, will navigate when dismissed');
    // Add debugging to see if store state changes
    this.currentAlert$.subscribe((alert) => {
      console.log('clear alert called');
      console.log('Store alert state after success alert:', alert);
    });
  }

  showSuccess() {
    console.log('Showing success alert');

    this.store.dispatch(
      AlertActions.showSuccessAlert({
        message: 'Password updated successfully! Redirecting...',
        duration: 3000,
      })
    );

    // Debug logging
    this.currentAlert$.subscribe((alert) => {
      console.log('Store alert state after dispatch:', alert);
    });
  }

  showError() {
    console.log('Showing error alert');

    this.store.dispatch(
      AlertActions.showErrorAlert({
        message: 'Failed to update password. Please try again.',
        duration: 5000,
      })
    );

    // Debug logging
    this.currentAlert$.subscribe((alert) => {
      console.log('Store alert state after dispatch:', alert);
    });
  }
}
