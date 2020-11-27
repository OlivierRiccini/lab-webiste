import { TestBed } from '@angular/core/testing';

import { FragmentGuard } from './fragment.guard';

describe('FragmentGuard', () => {
  let guard: FragmentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FragmentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
