// export class Book
// {
//     name:string;
//     id_lang:number;
//     author:string;
// }

export class City
{
    id_firebase : string;
    name:string;
    mayor:string;
    id_country:number;

    constructor(fire : string, name : string, mayor : string, id_country : number){
        this.id_firebase = fire;
        this.name = name;
        this.mayor = mayor;
        this.id_country = id_country;
    }
}