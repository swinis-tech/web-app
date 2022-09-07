import { TestBed } from '@angular/core/testing';

import { KhotbaHelperService } from './khotba-helper.service';

describe('KhotbaHelperService', () => {
  let service: KhotbaHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KhotbaHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
