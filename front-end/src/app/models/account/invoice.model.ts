export interface Invoice {
  id: string;
  invoiceId: string;
  client: string;
  service: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Overdue';
  date: string;
}
