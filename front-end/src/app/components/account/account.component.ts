import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from '../../models/tab-navigation/tab.model';
import { Invoice } from '../../models/account/invoice.model';
import { Job } from '../../models/account/job.model';
import { Fund } from '../../models/account/fund.model';
import { TabNavigationComponent } from '../tab-navigation/tab-navigation.component';
import { InvoiceComponent } from '../invoice/invoice.component';
import { CompletedJobsComponent } from '../completed-jobs/completed-jobs.component';
import { FundsComponent } from '../funds/funds.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    CommonModule,
    TabNavigationComponent,
    InvoiceComponent,
    CompletedJobsComponent,
    FundsComponent,
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent {
  tabs: Tab[] = [
    {
      id: 'invoices',
      name: 'Invoices',
      route: '/account/invoices',
      svgIconPaths: [
        'M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z',
        'M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z',
      ],
    },
    {
      id: 'completed-jobs',
      name: 'Completed Jobs',
      route: '/account/completed-jobs',
      svgIconPaths: [
        'M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z',
      ],
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
    {
      id: 'fund',
      name: 'Fund',
      route: '/account/fund',
      svgIconPaths: [
        'M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z',
        'M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z',
      ],
      fillRule: 'evenodd',
      clipRule: 'evenodd',
    },
  ];

  invoices: Invoice[] = [
    {
      id: 'INV-001',
      invoiceId: 'INV-001',
      client: 'John Doe',
      service: 'Panel Upgrade',
      amount: 500,
      status: 'Pending',
      date: '2024-06-15',
    },
    {
      id: 'INV-002',
      invoiceId: 'INV-002',
      client: 'Jane Smith',
      service: 'Light Installation',
      amount: 800,
      status: 'Paid',
      date: '2024-06-15',
    },
  ];

  completedJobs: Job[] = [
    {
      id: '1',
      jobId: 'JOB-340',
      client: 'John Smith',
      service: 'Emergency Repair',
      completedDate: '1/15/2024',
      earnings: 340,
      rating: 5,
      review: 'Excellent job fixing our kitchen sink leak. Very professional!',
    },
    {
      id: '2',
      jobId: 'JOB-339',
      client: 'Maria Garcia',
      service: 'Bathroom Renovation',
      completedDate: '1/10/2024',
      earnings: 2850,
      rating: 5,
      review: 'Outstanding work on our bathroom renovation.',
    },
    {
      id: '3',
      jobId: 'JOB-338',
      client: 'David Wilson',
      service: 'Water Heater Service',
      completedDate: '1/5/2024',
      earnings: 425,
      rating: 4.5,
      review: 'Great service. Very knowledgeable and efficient.',
    },
    {
      id: '4',
      jobId: 'JOB-337',
      client: 'Lisa Brown',
      service: 'Pipe Installation',
      completedDate: '12/28/2023',
      earnings: 680,
      rating: 5,
      review: 'Professional work. Highly recommend!',
    },
    {
      id: '5',
      jobId: 'JOB-336',
      client: 'Robert Taylor',
      service: 'Emergency Repair',
      completedDate: '12/20/2023',
      earnings: 510,
      rating: 4.5,
      review: 'Quick response and quality work.',
    },
  ];

  funds: Fund[] = [
    {
      id: '1',
      description: 'Payment from John Smith',
      amount: 340,
      date: '1/15/2024',
      type: 'Deposit',
    },
    {
      id: '2',
      description: 'Payment from Maria Garcia',
      amount: 2850,
      date: '1/10/2024',
      type: 'Deposit',
    },
    {
      id: '3',
      description: 'Withdrawal to Bank Account',
      amount: 1500,
      date: '1/5/2024',
      type: 'Withdrawal',
    },
    {
      id: '4',
      description: 'Payment from Lisa Brown',
      amount: 680,
      date: '12/28/2023',
      type: 'Deposit',
    },
  ];

  activeTabId = this.tabs[0].id;

  onTabSelected(tabId: string) {
    this.activeTabId = tabId;
  }
}
