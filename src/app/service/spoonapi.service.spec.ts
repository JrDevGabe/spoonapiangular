import { TestBed } from '@angular/core/testing';

import { SpoonapiService } from './spoonapi.service';

describe('SpoonapiService', () => {
  let service: SpoonapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpoonapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
