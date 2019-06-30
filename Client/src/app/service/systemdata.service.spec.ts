import { TestBed, inject } from '@angular/core/testing';

import { SystemdataService } from './systemdata.service';

describe('SystemdataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SystemdataService]
    });
  });

  it('should be created', inject([SystemdataService], (service: SystemdataService) => {
    expect(service).toBeTruthy();
  }));
});
