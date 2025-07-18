import { TestBed } from '@angular/core/testing';

import { SharedWeather } from './shared-weather';

describe('SharedWeather', () => {
  let service: SharedWeather;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedWeather);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
