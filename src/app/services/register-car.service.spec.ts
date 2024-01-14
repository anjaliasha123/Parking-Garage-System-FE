import { TestBed } from '@angular/core/testing';

import { RegisterCarService } from './register-car.service';

describe('RegisterCarService', () => {
  let service: RegisterCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
