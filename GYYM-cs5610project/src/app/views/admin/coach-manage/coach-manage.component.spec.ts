import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachManageComponent } from './coach-manage.component';

describe('CoachManageComponent', () => {
  let component: CoachManageComponent;
  let fixture: ComponentFixture<CoachManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
