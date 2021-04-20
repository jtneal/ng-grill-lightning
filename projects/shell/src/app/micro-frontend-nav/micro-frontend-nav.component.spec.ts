import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroFrontendNavComponent } from './micro-frontend-nav.component';

describe('MicroFrontendNavComponent', () => {
  let component: MicroFrontendNavComponent;
  let fixture: ComponentFixture<MicroFrontendNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroFrontendNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroFrontendNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
