import { TestBed } from '@angular/core/testing';

import { DataSharedStockService } from './data-shared-stock.service';

describe('DataSharedStockService', () => {
  let service: DataSharedStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSharedStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
