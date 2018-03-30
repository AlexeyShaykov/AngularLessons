import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameCardHostComponent } from './name-card-host.component';

describe('NameCardHostComponent', () => {
  let component: NameCardHostComponent;
  let fixture: ComponentFixture<NameCardHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameCardHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameCardHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
