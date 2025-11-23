import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Invoice } from '../../models/account/invoice.model';
import { CreateInvoiceComponent } from '../create-invoice/create-invoice.component';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, CreateInvoiceComponent],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
})
export class InvoiceComponent {
  @Input() invoices!: Invoice[];

  isCreateInvoiceModalOpen = false;

  onCreateInvoice() {
    this.isCreateInvoiceModalOpen = true;
  }

  onInvoiceClick(invoice: Invoice) {
    console.log('Invoice clicked:', invoice);
    // Navigate to invoice detail or open modal
  }

  getStatusClass(status: string): string {
    return `status-${status.toLowerCase()}`;
  }

  closeCreateInvoiceModal() {
    this.isCreateInvoiceModalOpen = false;
  }

  handleCreateInvoice(invoiceData: Invoice) {
    console.log('Invoice created:', invoiceData);
    // Send to API to create invoice
    alert(`Invoice created for ${invoiceData.client} - $${invoiceData.amount}`);
  }
}
