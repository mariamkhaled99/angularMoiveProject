import { TestBed } from '@angular/core/testing';

import { RouttingGuardGuard } from './routting-guard.guard';

describe('RouttingGuardGuard', () => {
  let guard: RouttingGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RouttingGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
