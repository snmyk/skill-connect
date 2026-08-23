import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalActionCardComponent } from './professional-action-card.component';

describe('ProfessionalActionCardComponent', () => {
  let component: ProfessionalActionCardComponent;
  let fixture: ComponentFixture<ProfessionalActionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalActionCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfessionalActionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
