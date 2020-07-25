import { TestBed } from '@angular/core/testing';

import { NgxCoreLibService } from './ngx-core-lib.service';

describe('NgxCoreLibService', () => {
  let service: NgxCoreLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCoreLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
