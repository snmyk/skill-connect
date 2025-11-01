export interface Fund {
  id: string;
  description: string;
  amount: number;
  date: string;
  type: 'Deposit' | 'Withdrawal';
}
