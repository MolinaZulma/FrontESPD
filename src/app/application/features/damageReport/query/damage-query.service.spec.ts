import { TestBed } from '@angular/core/testing';

import { DamageQueryService } from './damage-query.service';

describe('DamageQueryService', () => {
  let service: DamageQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DamageQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
