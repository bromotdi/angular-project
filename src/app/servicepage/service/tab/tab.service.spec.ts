import { TestBed } from '@angular/core/testing';
import { TabService } from './tab.service';

describe('TabService', () => {
  let service: TabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Табулювання значення x=-0.42 y=0.9131', () => {
    let x=-0.42;
    let y=0.9131;
    let xy=service.getTab(x);
    let y1=xy.get(x);
    expect(y.toFixed(2)).toBe(y1.toFixed(2));
  });

});