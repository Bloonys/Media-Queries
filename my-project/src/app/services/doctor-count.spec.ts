import { TestBed } from '@angular/core/testing';
import { DoctorCountService } from './doctor-count';

describe('DoctorCountService', () => {
  let service: DoctorCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
