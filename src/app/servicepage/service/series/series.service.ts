import { Injectable, Optional } from '@angular/core';
import { LogService } from './../logger/log.service';

@Injectable({
  providedIn: 'root'
})

export class SeriesService {
  private xy = new Map();
  constructor(@Optional() private logService: LogService) { }

  getSeries(x: number) 
  {
    let sum: number = 1,
    sqr = x * x,
    min = 1E-12,
    mem = 1, n = 1, mul = -1;
    do {
      n++;
      mem = mem * sqr / (2 * n - 2) / (2 * n - 3);
      sum = sum + mul * mem;
      mul = -mul;
    }
      while (mem > min || mem < -min)
        return sum;
    }

    getTab(xn: number = -9.42, xk: number = 9.42, h:number = 0.5)
  {
    let x = xn,
    y = 0.0;
    while (x <= xk) 
    {
      y = this.getSeries(x);
      this.xy.set(x, y);
      if (this.logService)
        this.logService.write("x=" + x.toFixed(2) + " y=" + y.toFixed(4));
      x = x + h;
    }
    return this.xy;
  }

}
