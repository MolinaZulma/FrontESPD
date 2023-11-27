import { TestBed } from '@angular/core/testing';

import { AvailableViewsService } from './available-views.service';

describe('AvailableViewsService', () => {
  let service: AvailableViewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableViewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
