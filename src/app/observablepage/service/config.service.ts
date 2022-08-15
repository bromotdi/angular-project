// import { LanguageList } from './LanguageList';
// import { Language } from './Language';
// import { Injectable } from '@angular/core';
// import { Observable, BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })

// export class ConfigService {
//   currentLang = DEFAULT_LANG;
//   lang$: BehaviorSubject < Language > = new BehaviorSubject<Language>(DEFAULT_LANG);
//   setLang(lang: Language) {
//     console.log("Є зміни!!!!");
//     this.lang$.next(
//     lang)
//   }
// constructor() { }
// }

// var languagList = new LanguageList();
// const DEFAULT_LANG = languagList.lang.get(0);

import { Country} from './Country';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConfigService {
  currentCountry = DEFAULT_COUNTRY;
  country$: BehaviorSubject < Country > = new BehaviorSubject<Country>(DEFAULT_COUNTRY);
  setCountry(country: Country) {
    console.log("Є зміни!!!!");
    this.country$.next(country)
  }
constructor() { }
}

const DEFAULT_COUNTRY = {"key_firebase":"","id":1,"name":"укр"};
// var countrList = new CountryList();
// const DEFAULT_COUNTRY = countrList.country.get(0);