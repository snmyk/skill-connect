import { Component } from "@angular/core";
import { HeaderComponent } from "../components/header/header.component";

@Component({
    selector: "app-main-layout",
    templateUrl: "./main-layout.component.html",
    styleUrls: ["./main-layout.component.css"],
    standalone: true,
    imports: [HeaderComponent]
})
export class MainLayoutComponent {}