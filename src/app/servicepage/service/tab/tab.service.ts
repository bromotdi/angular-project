import { Injectable, Optional } from '@angular/core';
import { LogService } from './../logger/log.service';

@Injectable({
  providedIn: 'root'
})

export class TabService {
  private xy = new Map();

  constructor(@Optional() private logService: LogService) { }

  getTab(xn: number = -9.42, xk: number = 9.42, h:number = 0.5): Map<number, number> 
  {
    let x = xn,
    y = 0.0;
    while (x <= xk) 
    {
      y = Math.cos(x);
      this.xy.set(x, y);
      if (this.logService)
        this.logService.write("x=" + x.toFixed(2) + " y=" + y.toFixed(4));
      x = x + h;
    }
    return this.xy;
  }
}