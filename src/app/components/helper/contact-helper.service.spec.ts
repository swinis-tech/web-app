import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact-helper.service';

describe('ContactHelperService', () => {
  let service: ContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
