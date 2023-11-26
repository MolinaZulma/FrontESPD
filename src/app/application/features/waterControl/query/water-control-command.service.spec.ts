import { TestBed } from '@angular/core/testing';

import { WaterControlCommandService } from './water-control-command.service';

describe('WaterControlCommandService', () => {
  let service: WaterControlCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterControlCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
