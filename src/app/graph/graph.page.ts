import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.page.html',
  styleUrls: ['./graph.page.scss'],
})
export class GraphPage implements OnInit {

  @ViewChild('lineCanvas') private lineCanvas: ElementRef;
  lineChart: any;
  xn: number;
  xk: number;
  h: number;
  a: number;
  xx: string[];
  yy: number[];
  data = [];
  constructor() { }

  ngOnInit() {
  }

  lineChartMethod(){
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: this.xx,
        datasets: [{
          label: 'Графік функції',
          fill: false,
          data: this.yy,
          borderColor: 'rgb(249,0,211)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
        //   yAxes: [{
        //     ticks: {
        //     beginAtZero: true
        //   }
        // }]
        }
      }
    });
  }
  
  graphras(xn: string, xk: string, a: string, h: string) {
    this.data = []

    this.xn = parseFloat(xn);
    this.xk = parseFloat(xk);
    this.a = parseFloat(a);
    this.h = parseFloat(h);
    let x: number, y: number, i: number = 0;
    x = this.xn;
    this.xx = new Array();
    this.yy = new Array();
    x = this.xn;

    while (x < this.xk) {
      if (x <= 0) {
        y = Math.tan((x+3)*(x+3))/(Math.abs(Math.pow(x, 2))*Math.sin(3*x));
      }

      else if (x <= this.a) {
        y = (x*x*x-4*x+2)/(x*x+Math.sin(7*x)-1);
      }

      else {
        y = (Math.tan(0.1*Math.PI*x*x)+x)/(Math.cos(x+1)*Math.cos(x+1));
      }

      this.xx.push(x.toFixed(1));
      this.yy.push(parseFloat(y.toFixed(1)));

      console.log(this.xx[i]);
      console.log(this.yy[i]);
      i = i + 1;
      x = x + this.h;
      this.lineChartMethod();

    }
  }
}
