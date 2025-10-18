import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasswordModalComponent } from './new-password-modal.component';

describe('NewPasswordModalComponent', () => {
  let component: NewPasswordModalComponent;
  let fixture: ComponentFixture<NewPasswordModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPasswordModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewPasswordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
