import { TestBed } from '@angular/core/testing';

import { ActivityRegisterQueryService } from './activity-register-query.service';

describe('ActivityRegisterQueryService', () => {
  let service: ActivityRegisterQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityRegisterQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
