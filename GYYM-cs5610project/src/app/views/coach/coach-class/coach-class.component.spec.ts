import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachClassComponent } from './coach-class.component';

describe('CoachClassComponent', () => {
  let component: CoachClassComponent;
  let fixture: ComponentFixture<CoachClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
