import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Invoice } from '../../models/account/invoice.model';

@Component({
  selector: 'app-create-invoice',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.css',
})
export class CreateInvoiceComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() createInvoice = new EventEmitter<Invoice>();

  formData: Invoice = {
    id: '',
    invoiceId: '',
    client: '',
    clientEmail: '',
    service: '',
    amount: 0,
    dueDate: '',
    description: '',
    status: 'Draft',
    date: '',
  };

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

  async onSubmit() {
    if (!this.isFormValid()) {
      return;
    }

    this.isLoading = true;

    // Simulate API call
    setTimeout(() => {
      this.createInvoice.emit({ ...this.formData });
      this.isLoading = false;
      this.onClose();
    }, 1000);
  }

  isFormValid(): boolean {
    return !!(
      this.formData.client &&
      this.formData.clientEmail &&
      this.formData.service &&
      (this.formData.amount ? this.formData.amount > 0 : false) &&
      this.formData.dueDate
    );
  }

  resetForm() {
    this.formData = {
      id: '',
      invoiceId: '',
      client: '',
      clientEmail: '',
      service: '',
      amount: 0,
      dueDate: '',
      description: '',
      status: 'Draft',
      date: '',
    };
    this.isLoading = false;
  }
}
