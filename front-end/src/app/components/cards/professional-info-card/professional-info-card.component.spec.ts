import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalInfoCardComponent } from './professional-info-card.component';

describe('ProfessionalInfoCardComponent', () => {
  let component: ProfessionalInfoCardComponent;
  let fixture: ComponentFixture<ProfessionalInfoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalInfoCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessionalInfoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
