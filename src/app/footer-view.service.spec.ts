import { TestBed } from '@angular/core/testing';

import { FooterViewService } from './footer-view.service';

describe('FooterViewService', () => {
  let service: FooterViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FooterViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
