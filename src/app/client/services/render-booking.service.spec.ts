import { TestBed } from '@angular/core/testing';

import { RenderBookingService } from './render-booking.service';

describe('RenderBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RenderBookingService = TestBed.get(RenderBookingService);
    expect(service).toBeTruthy();
  });
});
