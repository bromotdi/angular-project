// export class Language
// {
//     id:number;
//     name:string;
// }

export class Country
{
    key_firebase : string;
    id:number;
    name:string;

   constructor(key : string, id : number, name : string){
        this.key_firebase = key;
        this.id = id;
        this.name = name;
    }
}