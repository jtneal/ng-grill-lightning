import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakfastComponent } from './breakfast.component';

describe('BreakfastComponent', () => {
  let component: BreakfastComponent;
  let fixture: ComponentFixture<BreakfastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreakfastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakfastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
