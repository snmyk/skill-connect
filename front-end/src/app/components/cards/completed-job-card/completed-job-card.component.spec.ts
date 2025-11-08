import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedJobCardComponent } from './completed-job-card.component';

describe('CompletedJobCardComponent', () => {
  let component: CompletedJobCardComponent;
  let fixture: ComponentFixture<CompletedJobCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompletedJobCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompletedJobCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
