import { TestBed } from '@angular/core/testing';

import { EnergiaService } from './energia.service';

describe('EnergiaService', () => {
  let service: EnergiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnergiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
