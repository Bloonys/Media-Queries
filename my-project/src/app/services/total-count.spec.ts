import { TestBed } from '@angular/core/testing';
import { TotalCountService } from './total-count';

describe('TotalCountService', () => {
  let service: TotalCountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalCountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
