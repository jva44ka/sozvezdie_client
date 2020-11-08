import { TestBed } from '@angular/core/testing';

import { OfferHttpServiceService } from './offer-http-service.service';

describe('OfferHttpServiceService', () => {
  let service: OfferHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfferHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
