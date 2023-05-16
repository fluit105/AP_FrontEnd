import { TestBed } from '@angular/core/testing';

import { PullPersonasServiceService } from './pull-personas-service.service';

describe('PullPersonasServiceService', () => {
  let service: PullPersonasServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PullPersonasServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
