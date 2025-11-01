import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { AlertConfig } from '../../models/alert/alert-config.model';
import * as AlertActions from '../../store/alert-notification-store/alert-notification.action';
import * as AlertSelectors from '../../store/alert-notification-store/alert-notification.selector';

@Component({
  selector: 'app-alert-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-notification.component.html',
  styleUrl: './alert-notification.component.css',
})
export class AlertNotificationComponent implements OnInit, OnDestroy {
  currentAlert$: Observable<AlertConfig | null>;
  currentAlert: AlertConfig | null = null;
  private alertSubscription?: Subscription;

  constructor(private store: Store) {
    this.currentAlert$ = this.store.select(AlertSelectors.selectCurrentAlert);
  }

  ngOnInit(): void {
    // Subscribe to alert changes from store
    this.alertSubscription = this.currentAlert$.subscribe((alert) => {
      this.currentAlert = alert;
      console.log('Alert notification component received alert:', alert);
      if (this.currentAlert) {
        setTimeout(() => {
          this.onClose();
        }, this.currentAlert.duration);
      }
    });
  }

  ngOnDestroy(): void {
    // Clean up subscription
    if (this.alertSubscription) {
      this.alertSubscription.unsubscribe();
    }
  }

  onClose(): void {
    console.log('Alert closed');
    // This dispatch triggers the manualDismissAlert$ effect
    this.store.dispatch(AlertActions.dismissAlert());
  }

  // Helper methods for template
  get isVisible(): boolean {
    return this.currentAlert !== null;
  }

  get message(): string {
    return this.currentAlert?.message || '';
  }

  get isSuccess(): boolean {
    return this.currentAlert?.isSuccess || false;
  }

  get alertType(): string {
    if (!this.currentAlert) return '';
    return this.currentAlert.isSuccess ? 'success' : 'error';
  }

  get alertDuration(): number {
    return this.currentAlert?.duration || 3000;
  }
}
