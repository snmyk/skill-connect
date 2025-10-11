import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrowseProfessionalsComponent } from './pages/browse-professionals/browse-professionals.component';
import { JoinProfessionalComponent } from './pages/professional-registration/join-professional.component';
import { ViewProfessonalProfileComponent } from './pages/view-professonal-profile/view-professonal-profile.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'  },
  { path: 'home', component: HomeComponent },
  { path: 'browse/professionals', component: BrowseProfessionalsComponent },
  { path: 'register', component: JoinProfessionalComponent },
  { path: 'reviews', component: ViewProfessonalProfileComponent },
  { path: 'browse/professionals/:id', component: ViewProfessonalProfileComponent },
  // Additional routes can be added here
];
