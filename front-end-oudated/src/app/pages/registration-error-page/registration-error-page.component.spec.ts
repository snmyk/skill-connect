import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationErrorPageComponent } from './registration-error-page.component';

describe('RegistrationErrorPageComponent', () => {
  let component: RegistrationErrorPageComponent;
  let fixture: ComponentFixture<RegistrationErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationErrorPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
