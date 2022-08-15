import { Country } from './Country';
import { City } from './City';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database'
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
providedIn: 'root'
})

export class FirebaseService {

cityListRef: AngularFireList<any>;
countryListRef: AngularFireList<any>;
dbRef: AngularFireObject<any>;

items: Observable<any[]>;

constructor (private db: AngularFireDatabase){ }
// Create City
createCity(city: City) {
return this.cityListRef.push({
    name: city.name,
    mayor: city.mayor,
    id_country: city.id_country
})}
// Create Lang
createCountry(country: Country) {
return this.countryListRef.push({
id:country.id,
name: country.name
})


   }

  
  updateCountry(key: string, newText1: string) {
    console.log("update2 " + key);
    return this.getRecord(key, 'Country').update({ name: newText1 });
  }
  updateCity(key: string, newText1: string, newText2: string) {
    console.log("update1 "+key);
    return this.getRecord(key, 'City').update({ name: newText1, mayor: newText2 });
  }

  deleteCity(key){
    console.log(key  + "key for delete");
    return this.getRecord(key, 'City').remove()
  }

  deleteCountry(key){
    return this.getRecord(key, 'Country').remove()
  }


  getRecord(id: string, db:string) {
    this.dbRef = this.db.object('/'+db +'/' + id);
    console.log("dbRef="+this.dbRef.snapshotChanges());
    return this.dbRef;
  }

getRecordList(db:string,op:boolean) {
if (op)
{this.cityListRef = this.db.list('/'+db);
return this.cityListRef;}
else
{
this.countryListRef = this.db.list('/'+db);
return this.countryListRef;
}
}}
