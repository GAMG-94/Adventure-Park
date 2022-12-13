import { TestBed } from '@angular/core/testing';

import { DesautorizarGuard } from './desautorizar.guard';

describe('DesautorizarGuard', () => {
  let guard: DesautorizarGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DesautorizarGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
