import { TestBed } from '@angular/core/testing';

import { CommercialService } from './commercial.service';

describe('CommercialService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommercialService = TestBed.get(CommercialService);
    expect(service).toBeTruthy();
  });
});
