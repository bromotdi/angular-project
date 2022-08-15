import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import {RecursionService} from './service/recursion/recursion.service';
import {SeriesService} from './service/series/series.service';
import {TabService} from './service/tab/tab.service';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
})
export class ServicepagePage implements OnInit {


  @ViewChild('lineCanvasSeries') private lineCanvasSeries: ElementRef;
  @ViewChild('lineCanvasTabs') private lineCanvasTabs: ElementRef;
  @ViewChild('lineCanvasRecursion') private lineCanvasRecursion: ElementRef;
  lineChart: any;
  constructor(private tabService:TabService,
              private seriesService:SeriesService,
              private recursionService:RecursionService) { }
  xyTab = new Map();
  xx:number [];
  yy:number [];
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput = new Map();
  ngOnInit() {
  }
  ras(xn:string, xk:string, h:string){
    let xn1 = parseFloat(xn);
    let xk1 = parseFloat(xk);
    let h1 = parseFloat(h);
    console.log("Табулювання");
    this.xyTab = this.tabService.getTab(xn1, xk1,h1);
    console.log("Ряд");
    this.xySeries = this.seriesService.getTab(xn1, xk1, h1);
    console.log("Рекурсія");
    this.xyRecursion = this.recursionService.getTab(xn1, xk1, h1);
    this.input();
    this.lineChartMethod(this.xyTab,this.lineCanvasTabs,"Табулювання",'rgb(255, 255, 255)');
    this.lineChartMethod(this.xySeries,this.lineCanvasSeries,"Ряд",'rgb(29,0,211)');
    this.lineChartMethod(this.xyRecursion,this.lineCanvasRecursion,"Рекурсія",'rgb(90, 0, 157)');
  }

  input(){
    this.xyTab.forEach((value, key, map) =>{
      let s = "";
      let y:number=0;
      y=value;
      s=y.toFixed(4) + " ";
      y = this.xySeries.get(key);
      s=s+y.toFixed(4);
      y=this.xyRecursion.get(key);
      s=s+" "+y.toFixed(4);
      let x = key;
      this.xyInput.set(x.toFixed(2),s);
    })
  }

  lineChartMethod(data,canvas,graphName,color){
    this.yy = new Array()
    this.xx = new Array()
    this.xx=Array.from(data.keys());
    this.yy=Array.from(data.values());
    let result = [];
    this.xx.forEach(a => result.push( a.toFixed(2) ));
    console.log(result)
    this.lineChart = new Chart(canvas.nativeElement, {
      type: 'line',
      data: {
        labels: result,
        datasets: [{
          label: graphName,
          fill: false,
          data: this.yy,
          borderColor: color,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
                    yAxes: {
                        beginAtZero: true
                    }
              
        }}
    });
  }

}
