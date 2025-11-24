import { TestBed } from '@angular/core/testing';

import { TotalCount } from './total-count';

describe('TotalCount', () => {
  let service: TotalCount;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalCount);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
