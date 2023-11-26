import { TestBed } from '@angular/core/testing';

import { PtapFormatService } from './ptap-format.service';

describe('PtapFormatService', () => {
  let service: PtapFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PtapFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
