import { TestBed } from '@angular/core/testing';

import { ItemServicesService } from './item-services.service';

describe('ItemServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemServicesService = TestBed.get(ItemServicesService);
    expect(service).toBeTruthy();
  });
});
