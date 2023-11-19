import { TestBed } from '@angular/core/testing';

import { WaterControlService } from './water-control.service';

describe('WaterControlService', () => {
  let service: WaterControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
