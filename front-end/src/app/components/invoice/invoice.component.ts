import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Invoice } from '../../models/account/invoice.model';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './invoice.component.html',
  styleUrl: './invoice.component.css',
})
export class InvoiceComponent {
  @Input() invoices!: Invoice[];

  onCreateInvoice() {
    console.log('Create invoice clicked');
    // Open create invoice modal
  }

  onInvoiceClick(invoice: Invoice) {
    console.log('Invoice clicked:', invoice);
    // Navigate to invoice detail or open modal
  }

  getStatusClass(status: string): string {
    return `status-${status.toLowerCase()}`;
  }
}
