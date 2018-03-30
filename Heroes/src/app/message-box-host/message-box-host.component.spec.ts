import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoxHostComponent } from './message-box-host.component';

describe('MessageBoxHostComponent', () => {
  let component: MessageBoxHostComponent;
  let fixture: ComponentFixture<MessageBoxHostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBoxHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoxHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
