/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StartPointNgrxService } from './start-point-ngrx.service';

describe('Service: StartPoint', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StartPointNgrxService]
    });
  });

  it('should ...', inject([StartPointNgrxService], (service: StartPointNgrxService) => {
    expect(service).toBeTruthy();
  }));
});
