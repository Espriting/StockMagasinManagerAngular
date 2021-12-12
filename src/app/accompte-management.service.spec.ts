import { TestBed } from '@angular/core/testing';

import { AccompteManagementService } from './accompte-management.service';

describe('AccompteManagementService', () => {
  let service: AccompteManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccompteManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
