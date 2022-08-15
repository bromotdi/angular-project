import { TestBed } from '@angular/core/testing';

import { SeriesService } from './series.service';

describe('SeriesService', () => {
  let service: SeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Сума ряду значення x=-0.42 y=0.9131', () => {
    let x=-0.42;
    let y=0.9131;
    let y1=service.getSeries(x);
    expect(y.toFixed(2)).toBe(y1.toFixed(2));
    });

});
