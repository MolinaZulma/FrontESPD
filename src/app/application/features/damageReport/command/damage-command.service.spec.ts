import { TestBed } from '@angular/core/testing';

import { DamageCommandService } from './damage-command.service';

describe('DamageCommandService', () => {
  let service: DamageCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DamageCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
