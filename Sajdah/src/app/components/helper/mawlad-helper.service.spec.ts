import { TestBed } from '@angular/core/testing';

import { MawladHelperService } from './mawlad-helper.service';

describe('MawladHelperService', () => {
  let service: MawladHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MawladHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
