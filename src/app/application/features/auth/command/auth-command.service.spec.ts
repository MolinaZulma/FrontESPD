import { TestBed } from '@angular/core/testing';

import { AuthCommandService } from './auth-command.service';

describe('AuthCommandService', () => {
  let service: AuthCommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthCommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
