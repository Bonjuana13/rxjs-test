/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StartPointService } from './start-point.service';

describe('Service: StartPoint', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StartPointService]
    });
  });

  it('should ...', inject([StartPointService], (service: StartPointService) => {
    expect(service).toBeTruthy();
  }));
});
