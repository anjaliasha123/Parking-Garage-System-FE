import { TestBed } from '@angular/core/testing';

import { ParkVehicleService } from './park-vehicle.service';

describe('ParkVehicleService', () => {
  let service: ParkVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParkVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
