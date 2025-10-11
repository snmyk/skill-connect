import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrowseProfessionalsComponent } from './pages/browse-professionals/browse-professionals.component';
import { JoinProfessionalComponent } from './pages/professional-registration/join-professional.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  { path: 'home', component: HomeComponent },
  { path: 'browse', component: BrowseProfessionalsComponent },
  { path: 'register', component: JoinProfessionalComponent },
  // Additional routes can be added here
];
