import { TestBed } from '@angular/core/testing';

import { FooterViewService } from './services/footer-view.service';

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
