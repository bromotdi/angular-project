import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  a:number;
  b:number;
  c:number;
  d:number;

  constructor() {}

ras (a:string,b:string,c:string){

this.a=parseFloat(a);
this.b=parseFloat(b);
this.c=parseFloat(c);

if ((this.a>0)||(this.b>0)||(this.c>0))
    this.d=(this.a+this.b+this.c)*(this.a+this.b+this.c);

else
    this.d=this.a*this.a+this.b*this.b+this.c*this.c;

}
}