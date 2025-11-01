import { Component, Input } from '@angular/core';
import { Fund } from '../../models/account/fund.model';

@Component({
  selector: 'app-funds',
  standalone: true,
  imports: [],
  templateUrl: './funds.component.html',
  styleUrl: './funds.component.css',
})
export class FundsComponent {
  @Input() funds: Fund[] = [];

  getAvailableBalance(): number {
    return 4805;
  }

  getPendingBalance(): number {
    return 425;
  }

  getTotalBalance(): number {
    return this.funds.reduce((total, fund) => {
      return fund.type === 'Deposit'
        ? total + fund.amount
        : total - fund.amount;
    }, 0);
  }

  getTotalEarnings(): number {
    return 4805;
  }

  onWithdrawFunds() {
    console.log('Withdraw funds clicked');
    // Open withdraw funds modal
  }
}
