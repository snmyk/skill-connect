import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Tab } from '../../models/tab-navigation/tab.model';

@Component({
  selector: 'app-tab-navigation',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './tab-navigation.component.html',
  styleUrl: './tab-navigation.component.css',
})
export class TabNavigationComponent {
  @Input() tabs!: Tab[];
  @Input() activeTabId!: string;
  @Output() tabSelected = new EventEmitter<string>();

  onTabClick(tabId: string) {
    this.tabSelected.emit(tabId);
  }
}
