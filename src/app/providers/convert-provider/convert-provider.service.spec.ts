import { TestBed } from '@angular/core/testing';

import { ConvertProvider } from './convert-provider.service';

describe('ConvertProvider', () => {
  let service: ConvertProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
