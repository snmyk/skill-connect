import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "../../components/search/search.component";
import { ServiceCategoriesComponent } from "../../components/service-categories/service-categories.component";
import { TopRatedProfessionalsComponent } from "../../components/top-rated-professionals/top-rated-professionals.component";
import { CtaSectionComponent } from "../../components/call-to-action/cta-section.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  standalone: true,
  imports: [CommonModule, SearchComponent, ServiceCategoriesComponent, TopRatedProfessionalsComponent, CtaSectionComponent, FooterComponent]
})
export class HomeComponent {}
