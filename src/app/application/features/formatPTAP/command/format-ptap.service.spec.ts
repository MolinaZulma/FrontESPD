import { TestBed } from '@angular/core/testing';

import { FormatPTAPService } from './format-ptap.service';

describe('FormatPTAPService', () => {
  let service: FormatPTAPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatPTAPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
