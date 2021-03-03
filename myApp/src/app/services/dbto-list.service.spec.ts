import { TestBed } from '@angular/core/testing';

import { DbtoListService } from './dbto-list.service';

describe('DbtoListService', () => {
  let service: DbtoListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbtoListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
