import { TestBed } from '@angular/core/testing';
import { PatientCountService } from './patient-count';

describe('PatientCountService', () => {
  let service: PatientCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
