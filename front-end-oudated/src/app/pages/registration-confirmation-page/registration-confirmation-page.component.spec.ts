import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationConfirmationPageComponent } from './registration-confirmation-page.component';

describe('RegistrationConfirmationPageComponent', () => {
  let component: RegistrationConfirmationPageComponent;
  let fixture: ComponentFixture<RegistrationConfirmationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationConfirmationPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
