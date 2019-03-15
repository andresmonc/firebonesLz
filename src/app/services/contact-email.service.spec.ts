import { TestBed } from '@angular/core/testing';

import { ContactEmailService } from './contact-email.service';

describe('ContactEmailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactEmailService = TestBed.get(ContactEmailService);
    expect(service).toBeTruthy();
  });
});
