import { Injectable, Optional } from '@angular/core';
import { LogService } from './../logger/log.service';

@Injectable({
  providedIn: 'root'
})

export class RecursionService {
  yy:number;
  private xy = new Map();
  constructor(@Optional() private logService: LogService) { }

  getRecursion(x:number, mem:number, mul:number, n:number, sum:number) 
  {
    let  sqr = x * x,
    min = 1E-12;
    
    mem = mem*sqr/(2*n-2)/(2*n-3);
    n++;
      sum = sum + mul*mem;
      mul = -mul;
    
    if (mem>min || mem<-min)
     this.getRecursion(x,mem,mul,n,sum);
     
    else 
      this.yy=sum;

    return this.yy
  }

    getTab(xn: number = -9.42, xk: number = 9.42, h:number = 0.5)
  {
    let y, x = xn;
    while (x <= xk) 
    {
      y=this.getRecursion(x,1,-1,2,1);
      this.xy.set(x, y);
      if (this.logService)
       this.logService.write("x=" + x.toFixed(2) + " y=" + y.toFixed(4));
      x = x + h;
    }
    return this.xy;
  }
}
