import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyTopLogoComponent } from './sticky-top-logo.component';

describe('StickyTopLogoComponent', () => {
  let component: StickyTopLogoComponent;
  let fixture: ComponentFixture<StickyTopLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickyTopLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyTopLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
