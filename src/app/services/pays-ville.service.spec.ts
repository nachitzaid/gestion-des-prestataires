import { TestBed } from '@angular/core/testing';

import { PaysVilleService } from './pays-ville.service';

describe('PaysVilleService', () => {
  let service: PaysVilleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaysVilleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
