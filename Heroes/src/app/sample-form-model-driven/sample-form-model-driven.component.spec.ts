import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFormModelDrivenComponent } from './sample-form-model-driven.component';

describe('SampleFormModelDrivenComponent', () => {
  let component: SampleFormModelDrivenComponent;
  let fixture: ComponentFixture<SampleFormModelDrivenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleFormModelDrivenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleFormModelDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
