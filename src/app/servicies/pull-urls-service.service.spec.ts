import { TestBed } from '@angular/core/testing';

import { PullURLsServiceService } from './pull-urls-service.service';

describe('PullURLsServiceService', () => {
  let service: PullURLsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PullURLsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
