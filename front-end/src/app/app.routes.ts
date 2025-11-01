import { Routes } from '@angular/router';
import { authGuard } from './gaurds/auth/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { BrowseProfessionalsComponent } from './pages/browse-professionals/browse-professionals.component';
import { JoinProfessionalComponent } from './pages/professional-registration/join-professional.component';
import { ViewProfessonalProfileComponent } from './pages/view-professonal-profile/view-professonal-profile.component';
import { AccountDashboardComponent } from './pages/account-dashboard/account-dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'browse/professionals',
    component: BrowseProfessionalsComponent,
  },
  {
    path: 'register',
    component: JoinProfessionalComponent,
  },
  {
    path: 'reviews',
    component: ViewProfessonalProfileComponent,
  },
  {
    path: 'browse/professionals/:id',
    component: ViewProfessonalProfileComponent,
  },
  {
    path: 'reset-password',
    component: HomeComponent,
  }, // This route will handle a query param for token
  {
    path: 'account',
    component: AccountDashboardComponent,
  },
  // Additional routes can be added here
];
