import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab } from '../../models/tab-navigation/tab.model';
import { Invoice } from '../../models/account/invoice.model';
import { TabNavigationComponent } from '../tab-navigation/tab-navigation.component';
import { InvoiceComponent } from '../invoice/invoice.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, TabNavigationComponent, InvoiceComponent],
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

  activeTabId = this.tabs[0].id;

  onTabSelected(tabId: string) {
    this.activeTabId = tabId;
  }
}
