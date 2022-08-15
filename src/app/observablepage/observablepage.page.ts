// import { CityList } from './service/CityList';
// import { CountryList } from './service/CountryList';
// import { Language } from './service/Country';
// import { ConfigService } from './service/config.service';
// import { Component, OnInit } from '@angular/core';
// import { Observable, BehaviorSubject, Subscription } from 'rxjs';
// import { Book } from "./service/City"

// @Component({
//   selector: 'app-observablepage',
//   templateUrl: './observablepage.page.html',
//   styleUrls: ['./observablepage.page.scss'],
// })

// export class ObservablepagePage implements OnInit {
//   langs = new LanguageList();
//   private subscriptions: Subscription[] = [];
//   private configService = new ConfigService();
//   bookList = new BookList(this.configService);
//   lang: Language;
//   count = 0;
//   constructor() { }
//   ngOnInit() {
//     const langSub = this.configService.lang$
//       .subscribe(() => {
//         this.lang = this.configService.lang$.value;
//       });
//     this.subscriptions.push(langSub);
//   }
//   nextLang() {
//     if (this.count < this.langs.lang.size - 1) {
//       this.count++;
//     }
//     else this.count = 0;
//     this.configService.setLang(this.langs.lang.get(this.count));
//   }

//   addBook(name, author) {
//     let book = new Book();
//     book.name = name;
//     book.author = author;
//     book.id_lang = this.lang.id;
//     this.bookList.add(book);
//   }

//   addLang(lang) {
//     let l = new Language();
//     l.id = this.langs.lang.size;
//     l.name = lang;
//     this.langs.add(l);
//   }

//   ngOnDestroy() {
//     this.subscriptions
//       .forEach(s => s.unsubscribe());
//   }
// }

import {FirebaseService} from './service/firebase.service'
import { CityList } from './service/CityList';
import { CountryList } from './service/CountryList';
import { Country } from './service/Country';
import { ConfigService } from './service/config.service';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { City } from "./service/City"

@Component({
  selector: 'app-observablepage',
  templateUrl: './observablepage.page.html',
  styleUrls: ['./observablepage.page.scss'],
})

export class ObservablepagePage implements OnInit {
  countries = new CountryList();
  private subscriptions: Subscription[] = [];
  private configService = new ConfigService();
  cityList = new CityList(this.configService);
  request = new CityList(this.configService);

  country: Country;
  count = 0;
  dbCity='City';
  dbCountry='Country';
  
  arr_bred:City[]=[];
  arr_bred1:Country[]=[];

  constructor(public fbService:FirebaseService) { }
  
  ngOnInit() {
      this.fetchTask(this.dbCity,true);
      
      let taskRes = this.fbService.getRecordList(this.dbCity,true);
      taskRes.snapshotChanges().subscribe(res => {
      this.arr_bred = [];

      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key; 
        this.arr_bred.push(new City(a['$key'], a['name'], a['mayor'], a['id_country']))//(a as Stud);
      })
      this.request.cityList = [];
      this.arr_bred.forEach(item => {this.request.cityList.push(item);});
    });

      this.fetchTask(this.dbCountry, false);
      let taskRes1 = this.fbService.getRecordList(this.dbCountry, false);
      taskRes1.snapshotChanges().subscribe( res => {
        this.arr_bred1 = [];
        res.forEach(item => {
          let a = item.payload.toJSON();
          a['$key'] = item.key; 
          this.arr_bred1.push(new Country(a['$key'],a['id'], a['name']))
        })
        this.countries.country = [];
        this.arr_bred1.forEach(item => {this.countries.country.push(item);});
      });
     
      const countrySub = this.configService.country$
      .subscribe(() => {
        this.country = this.configService.country$.value;
      });
      this.subscriptions.push(countrySub);
    }
  
   fetchTask(db,op) {
      this.fbService.getRecordList(db,op).valueChanges().subscribe(res => {
      console.log(res)
      if (op){ 
        this.request.cityList=this.request.cityList;}
      else{
      this.countries.country=res;
      this.country=this.countries.country[this.count];
      this.request.search(this.country.id);
      }
      })

  }

  nextCountry() {
    if (this.count < this.countries.country.length - 1) {
      this.count++;
    }
    else this.count = 0;
    this.configService.setCountry(this.countries.country[this.count]);
  }

  addCity(name, mayor) {
    let city = new City('',name,mayor,this.country.id);
    city.id_country = this.country.id;
    this.request.add(city);
    this.fbService.createCity(city);
    this.request.search(this.country.id);
  }

  updateCity(key: string, newText1: string,newText2: string) {
    this.fbService.updateCity(key, newText1, newText2);
  }

  updateCountry(newText1: string) {
    this.fbService.updateCountry(this.countries.country[this.count].key_firebase, newText1);
  }

  addCountry(country) {
    let c = new Country(country.key_firebase, country.id, country.name);
    c.id = c.id = (this.countries.country[this.countries.country.length - 1] as Country).id+1;///&&???????
    c.name = country;
    this.countries.add(c);
    this.fbService.createCountry(c);
  }

  deleteCountry(country)
  {
    console.log("delete");
    this.request.search(this.country.id);
    this.request.searchCity.forEach(element => {
      console.log(element)
      let city: City;
      city = element as City;
      this.deleteCity(city.id_firebase);
    });
    this.fbService.deleteCountry(this.countries.country[this.count].key_firebase);
  }

  deleteCity(key: string)
  {
    console.log()
    console.log(key)
    this.fbService.deleteCity(key);
  }

  ngOnDestroy() {
    this.subscriptions
      .forEach(s => s.unsubscribe());
  }
}