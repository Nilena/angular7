import { TestBed } from '@angular/core/testing';

import { SubmitserviceService } from './submitservice.service';

describe('SubmitserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubmitserviceService = TestBed.get(SubmitserviceService);
    expect(service).toBeTruthy();
  });
});
