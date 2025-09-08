import { TestBed } from '@angular/core/testing';

import { ApiImport } from './api-import';

describe('ApiImport', () => {
  let service: ApiImport;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiImport);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
