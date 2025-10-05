import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { ServiceCategoriesComponent } from './components/service-categories/service-categories.component';
import { TopRatedProfessionalsComponent } from './components/top-rated-professionals/top-rated-professionals.component';
import { CtaSectionComponent } from './components/call-to-action/cta-section.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SearchComponent, ServiceCategoriesComponent, TopRatedProfessionalsComponent, CtaSectionComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';
}
