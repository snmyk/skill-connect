import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header-component/header-component';
import { CommonModule } from '@angular/common';

@Component({
  imports: [HeaderComponent, CommonModule],
  selector: 'app-main-layout',
  styleUrl: './main-layout.css',
  templateUrl: './main-layout.html',
  standalone: true,
})
export class MainLayout {}
