// import {Language} from './Country';
// export class LanguageList
// {
//     lang=new Map();
//     constructor()
//     {
//         this.lang.set(0,{id:0,name:"укр"});
//         this.lang.set(1,{id:1,name:"eng"});
//     }
//     add(language:Language)
//     {
//         this.lang.set(language.id,{id:language.id,name:language.name});
//     }
// }

import {Country} from './Country'
export class CountryList
{
    country = new Array();
    constructor(){}

    add(country:Country)
    {
        this.country.push(this.country);
    }
}