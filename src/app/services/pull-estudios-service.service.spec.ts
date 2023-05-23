import { TestBed } from '@angular/core/testing';

import { PullEstudiosServiceService } from './pull-estudios-service.service';

describe('PullEstudiosServiceService', () => {
  let service: PullEstudiosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PullEstudiosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
