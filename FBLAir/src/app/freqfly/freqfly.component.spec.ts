import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreqflyComponent } from './freqfly.component';

describe('FreqflyComponent', () => {
  let component: FreqflyComponent;
  let fixture: ComponentFixture<FreqflyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreqflyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreqflyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
