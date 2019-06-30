import { TestBed, inject } from '@angular/core/testing';

import { ShipmentdataService } from './shipmentdata.service';

describe('ShipmentdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShipmentdataService]
    });
  });

  it('should be created', inject([ShipmentdataService], (service: ShipmentdataService) => {
    expect(service).toBeTruthy();
  }));
});
