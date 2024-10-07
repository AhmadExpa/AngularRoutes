import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { resolvedGuard } from './resolved.guard';

describe('resolvedGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => resolvedGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
