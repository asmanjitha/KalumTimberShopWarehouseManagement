import { TestBed, inject } from '@angular/core/testing';

import { BundledataService } from './bundledata.service';

describe('BundledataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BundledataService]
    });
  });

  it('should be created', inject([BundledataService], (service: BundledataService) => {
    expect(service).toBeTruthy();
  }));
});
