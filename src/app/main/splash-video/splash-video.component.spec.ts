import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashVideoComponent } from './splash-video.component';

describe('SplashVideoComponent', () => {
  let component: SplashVideoComponent;
  let fixture: ComponentFixture<SplashVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
