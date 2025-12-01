import { TestBed } from '@angular/core/testing';

import { DoctorCount } from './doctor-count';

describe('DoctorCount', () => {
  let service: DoctorCount;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorCount);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
