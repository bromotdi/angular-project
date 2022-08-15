// import { ConfigService } from './config.service';
// import { Book } from "./City"
// export class BookList
// {
//     private bookList = new Array();
//     private searchBook = new Array();
//     searcBookResult: string[]
//     langSub = this.configService.lang$
//     .subscribe(() => {
//         let lang = this.configService.lang$.value;
//         this.search(lang.id);
//     });
    
//     constructor(private configService: ConfigService)
//     {
//     let book = new Book();
//     book.name = "Чудове Чудовиськл";
//     book.id_lang = 0;
//     book.author = "Сашка";
//     this.add(book);
//     let book1 = new Book();
//     book1.name = "Негретята";
//     book1.id_lang = 1;
//     book1.author = "Агата Кристи"
//     this.add(book1);
//     this.search(0);
//     }
    
//     add(book: Book)
// {
//     this.bookList.push(book);
//     this.search(book.id_lang);
// }


// search(id_lang)
// {
    
//     this.searchBook = this.bookList.filter((book) =>
//      {
//         return book.id_lang == id_lang;
//      })
//         this.searcBookResult = [];
//         this.searchBook.forEach(el => {
//             this.searcBookResult.push(' Назва: ' + el.name);
//             this.searcBookResult.push(' Автор: ' + el.author); 
//         });
//     }
// }

import { ConfigService } from './config.service';
import { City } from "./City"

export class CityList
{
    cityList=new Array();
    searchCity=new Array();
    // searchStudResult:string[];
    countrySub = this.configService.country$

    .subscribe(()=>{
        let country = this.configService.country$.value;

        this.search(country.id);
    });

    constructor(private configService:ConfigService){ }

    add(city:City)
    {
        this.cityList.push(city);
        this.search(city.id_country);
    }

    search(id_country)
    {
        this.searchCity=this.cityList.filter((city)=>{
            return city.id_country== id_country;
        })
    }
}