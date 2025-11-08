export interface Invoice {
  id: string;
  invoiceId: string;
  client: string;
  clientEmail?: string;
  service: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue' | 'Draft';
  date: string;
  description?: string;
  dueDate?: string;
}
