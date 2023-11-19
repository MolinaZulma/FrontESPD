import { TestBed } from '@angular/core/testing';

import { JarFormatService } from './jar-format.service';

describe('JarFormatService', () => {
  let service: JarFormatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JarFormatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
