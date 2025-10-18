import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SearchComponent } from "../../components/search/search.component";
import { ServiceCategoriesComponent } from "../../components/service-categories/service-categories.component";
import { TopRatedProfessionalsComponent } from "../../components/top-rated-professionals/top-rated-professionals.component";
import { CtaSectionComponent } from "../../components/call-to-action/cta-section.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { NewPasswordModalComponent } from "../../components/new-password-modal/new-password-modal.component";
import { PasswordData } from "../../models/new-password.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  standalone: true,
  imports: [CommonModule, SearchComponent, ServiceCategoriesComponent, TopRatedProfessionalsComponent, CtaSectionComponent, FooterComponent, NewPasswordModalComponent]
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  isSetNewPasswordOpen = false;
  private resetToken: string = '';

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      if (token) {
        console.log('Password reset token:', token);
        this.resetToken = token;
        // Here you can handle the token, e.g., open a modal to reset password
        if (this.ValidateToken(token)) {
          this.openSetNewPassword();
        }
      }
    });
  }

  //Backend token validation example
  private ValidateToken(token: string): boolean {
    // Implement token validation logic here
    return true; // Placeholder
  }

  openSetNewPassword() { this.isSetNewPasswordOpen = true; }
  closeSetNewPassword() { this.isSetNewPasswordOpen = false; }
  
  async handleSetPassword(data: PasswordData) {
    try {
      // Simulate backend API call to update password
      const success = await this.updatePassword(data.newPassword, this.resetToken);
      
      if (success) {
        alert('Password updated successfully!');
        // Clear query parameters and navigate to browse professionals
        await this.router.navigate(['/browse/professionals']);
      } else {
        alert('Failed to update password. Please try again.');
      }
    } catch (error) {
      console.error('Error updating password:', error);
      alert('An error occurred while updating your password. Please try again.');
    }
  }

  private async updatePassword(newPassword: string, token: string): Promise<boolean> {
    // Simulate API call with delay
    return new Promise((resolve) => {
      setTimeout(() => {
        // Simulate random success/failure for demonstration
        // In real implementation, this would be an actual HTTP request
        console.log('Updating password with token:', token);
        console.log('New password:', newPassword);
        
        // Simulate 90% success rate
        const success = Math.random() > 0.1;
        resolve(success);
      }, 1500); // Simulate 1.5 second API call
    });
  }
}
