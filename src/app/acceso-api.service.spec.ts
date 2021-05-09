import { TestBed } from '@angular/core/testing';

import { AccesoApiService } from './acceso-api.service';

describe('AccesoApiService', () => {
  let service: AccesoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
