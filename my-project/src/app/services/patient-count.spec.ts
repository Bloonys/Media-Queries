import { TestBed } from '@angular/core/testing';

import { PatientCount } from './patient-count';

describe('PatientCount', () => {
  let service: PatientCount;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientCount);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
