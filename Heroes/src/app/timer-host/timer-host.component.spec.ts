import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerHostComponent } from './timer-host.component';

describe('TimerHostComponent', () => {
  let component: TimerHostComponent;
  let fixture: ComponentFixture<TimerHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
