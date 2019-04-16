import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachDisplayComponent } from './coach-display.component';

describe('CoachDisplayComponent', () => {
  let component: CoachDisplayComponent;
  let fixture: ComponentFixture<CoachDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
