import { TestBed } from '@angular/core/testing';

import { WindowRef } from '../services/window.service';

describe('WindowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WindowRef = TestBed.get(WindowRef);
    expect(service).toBeTruthy();
  });
});
