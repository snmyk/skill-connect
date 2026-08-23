import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfessonalProfileComponent } from './view-professonal-profile.component';

describe('ViewProfessonalProfileComponent', () => {
  let component: ViewProfessonalProfileComponent;
  let fixture: ComponentFixture<ViewProfessonalProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProfessonalProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewProfessonalProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
