import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interfacepage',
  templateUrl: './interfacepage.page.html',
  styleUrls: ['./interfacepage.page.scss'],
})
export class InterfacepagePage implements OnInit {
  show:IShow;
  constructor() { }
  ras() { 
    this.show=new Show_Console(); 
    let engineer=new Engineer("Вася",50,20, this.show); 
    engineer.work();
    let staff=new Staff("ТОВ «НВП «Глобинський м'ясо-молочний комплекс»",100,30, this.show); 
    staff.work();
    let administration=new Administration("ТОВ «Глобино»",30, this.show); 
    administration.work(); 
  }
  ngOnInit() {
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

interface IEmployee {
  name: string;
  coefficient_happiness: number;
}

interface IWork {
  work();
}

interface IShow {
  show(s: string);
}

export class Show_Console implements IShow {
  show(s: string) {
    console.log(s);
  }
}

export class Engineer implements IEmployee, IWork {
  name: string;
  coefficient_happiness: number;
  experience: number
  constructor(name: string, coefficient_happiness: number, experience: number, shower: IShow) {
    this.name = name;
    this.coefficient_happiness = coefficient_happiness;
    this.experience = experience;
    shower.show("Інженер " + this.name +",  коефіцієнт щастя: " + this.coefficient_happiness +"% "+ ",  досвід роботи: " + this.experience+" років");
  }

  work() {
    console.log("Це мій завод!");
  }
}

export class Staff implements IEmployee, IWork {
  name: string;
  coefficient_happiness: number;
  experience: number
  constructor(name: string, coefficient_happiness: number, experience: number, shower: IShow) {
    this.name = name;
    this.coefficient_happiness = coefficient_happiness;
    this.experience = experience;
    shower.show("Стабільні робітники заводу " + this.name +",  коефіцієнт щастя: " + this.coefficient_happiness +"% "+ ",  досвід роботи: " + this.experience+" років");
 }

  work() {
    console.log("Ми тут надовго!");
  }
}

abstract class Worker implements IEmployee {
  name: string;
  coefficient_happiness: number;
  abstract readonly characteristic: string
  constructor(name: string, coefficient_happiness: number) {

    this.name = name;
    this.coefficient_happiness = coefficient_happiness;
  }
}

export class Administration extends Worker implements IWork {
  
  get characteristic() {
    var t = getRandomInt(3);
    if (t == 0)
      return "бити байдики - наше покликання"
    else
      if (t == 1)
        return "дуже ліниві"
      else
        return "ліниві"
  }

  constructor(name: string, coefficient_happiness: number, shower: IShow) {
    super(name, coefficient_happiness);
    shower.show("Адміністрація " + this.name + 
    ",  коефіцієнт щастя: " + this.coefficient_happiness +"%"+ ",  характеристика: " + this.characteristic);
  }

  work() {
    console.log("Про нас пишуть неправду!");
  }
}

