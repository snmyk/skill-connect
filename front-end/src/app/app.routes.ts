import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrowseProfessionalsComponent } from './pages/browse-professionals/browse-professionals.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  { path: 'home', component: HomeComponent },
  { path: 'browse', component: BrowseProfessionalsComponent },
  // Additional routes can be added here
];
