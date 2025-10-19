import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AlertConfig } from '../models/alert-config.model';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertSubject = new Subject<AlertConfig | null>();
  alert$ = this.alertSubject.asObservable();

  showSuccess(message: string, duration?: number) {
    this.alertSubject.next({ isSuccess: true, message, duration });
  }

  showError(message: string, duration?: number) {
    this.alertSubject.next({ isSuccess: false, message, duration });
  }

  clear() {
    this.alertSubject.next(null);
  }
}
