import { TestBed } from '@angular/core/testing';

import { AccountService2 } from './account.service';

describe('AccountService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountService2 = TestBed.get(AccountService2);
    expect(service).toBeTruthy();
  });
});
