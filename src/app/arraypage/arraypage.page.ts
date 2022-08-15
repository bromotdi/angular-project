import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arraypage',
  templateUrl: './arraypage.page.html',
  styleUrls: ['./arraypage.page.scss'],
})

export class ArraypagePage implements OnInit {

  constructor() { }
  arrayNumbers :number[];
  aBound: number;
  bBound : number;
  sum:number;
  
  calculateArray(a:string, b:string){
  
  this.aBound = parseInt(a);
  this.bBound = parseInt(b);
  this.arrayNumbers=Array(this.bBound-this.aBound);
  //232 - єдине задовольняє
  this.sum = 0;
  for (let i = this.aBound;i < this.bBound;i++){
  this.arrayNumbers[i] = i;
  if(i % 29 == 0 && i % 2 == 0 && i % 5 == 2){
  this.sum += 1;
  
      console.log(this.arrayNumbers[i])
  }
  }
}
    ngOnInit() {      
    }
}
