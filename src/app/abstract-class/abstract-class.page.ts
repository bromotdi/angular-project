import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
})

export class AbstractClassPage implements OnInit {
  figure:Settlement[];
  min:number=0;

  constructor() { }

  getRandomInt(max) {
    return Math.floor(Math.random()*Math.floor(max));
  }

  ras(nn:string) {
    this.figure=new Array();
    let n=parseInt(nn);
    for(let i=0;i<2*n;i++) {
      this.figure.push(new Village("Місто:  ",this.getRandomInt(100), this.getRandomInt(100), this.getRandomInt(100)));
      this.figure.push(new City("Село:  ",this.getRandomInt(100), this.getRandomInt(100)));
    }
    
  this.min=500;
  this.figure.forEach((element)=>{
    element.ras();
      if(this.min>element.res) this.min=element.res;
      console.log(element.show())
    });
      console.log(this.min);
}

getColor(e1:number,min:number)
{
  return (Math.abs(e1-min)<0.01) ? 'green': "";

}
  
  ngOnInit() {
  }

}

abstract class Settlement {
  name:string;
  res:number;

  constructor() { }

  abstract show();
  abstract ras();
}

export class Village extends Settlement {
  h:number;
  num:number;
  S:number;

  constructor(public name:string, h:number, num:number, S:number) {
    super();
    this.h=h;
    this.num=num;
    this.S=S;
  }

  ras() {
    let r=(this.h*this.num)/this.S;
    this.res=r;
  }

  show() {
    return this.name+" к-ть будиночків h="+this.h+", к-ть мешканців в домі "+this.num+", площа S="+this.S+".   Щільність h="+this.res;
  }
}

export class City extends Settlement {
  h:number;
  S:number;

  constructor(public name:string, h:number,  S:number) {
    super();
    this.h=h;
    this.S=S;
  }

  ras() {
    let r=this.h/this.S;
    this.res=r;
  }

  show() {
    return this.name+" к-ть населення h="+this.h+", площа S="+this.S+".   Щільність h="+this.res;
  }
}