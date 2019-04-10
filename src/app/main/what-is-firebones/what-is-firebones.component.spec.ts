import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatIsFirebonesComponent } from './what-is-firebones.component';

describe('WhatIsFirebonesComponent', () => {
  let component: WhatIsFirebonesComponent;
  let fixture: ComponentFixture<WhatIsFirebonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhatIsFirebonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatIsFirebonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
