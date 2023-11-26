import { TestBed } from '@angular/core/testing';

import { JardFormatQueryService } from './jard-format-query.service';

describe('JardFormatQueryService', () => {
  let service: JardFormatQueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JardFormatQueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
