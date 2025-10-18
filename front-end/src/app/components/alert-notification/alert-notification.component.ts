import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert-notification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-notification.component.html',
  styleUrl: './alert-notification.component.css'
})
export class AlertNotificationComponent {
  @Input() isSuccess: boolean = true;
  @Input() message: string = '';
  @Input() duration: number = 3000; // 3 seconds default
  @Output() closed = new EventEmitter<void>();

  isVisible: boolean = false;
  private timeoutId: any;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['message'] && this.message) {
      this.show();
    }
  }

  show() {
    this.isVisible = true;
    this.clearTimeout();
    
    this.timeoutId = setTimeout(() => {
      this.hide();
    }, this.duration);
  }

  hide() {
    this.isVisible = false;
    this.clearTimeout();
    this.closed.emit();
  }

  onClose() {
    this.hide();
  }

  clearTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }

  ngOnDestroy() {
    this.clearTimeout();
  }
}
