import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSeacrhComponent } from './hero-seacrh.component';

describe('HeroSeacrhComponent', () => {
  let component: HeroSeacrhComponent;
  let fixture: ComponentFixture<HeroSeacrhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSeacrhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSeacrhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
