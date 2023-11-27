import { TestBed } from '@angular/core/testing';

import { FacadeLocatorService } from './facade-locator.service';

describe('FacadeLocatorService', () => {
  let service: FacadeLocatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeLocatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
