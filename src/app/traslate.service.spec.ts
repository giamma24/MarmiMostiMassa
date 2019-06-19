import { TestBed } from '@angular/core/testing';

import { TraslateService } from './traslate.service';

describe('TraslateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TraslateService = TestBed.get(TraslateService);
    expect(service).toBeTruthy();
  });
});
