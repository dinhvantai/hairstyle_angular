import { TestBed } from '@angular/core/testing';

import { StylistService } from './stylist.service';

describe('StylistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StylistService = TestBed.get(StylistService);
    expect(service).toBeTruthy();
  });
});
