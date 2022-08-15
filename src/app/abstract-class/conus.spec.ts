import { Village } from './abstract-class.page';
import { City } from './abstract-class.page';
import { exception } from "console"

describe('Village Testing', () => {
    let village:Village;
    beforeEach(() => {
        village=new Village("Village", 10, 12, 1200);
    })
    fit("Створили екземпляр класу Village", () => {
        expect(village).toBeTruthy();
    })
    fit ("Розрахунок щільності населення для села з 10 будиночків, в кожному з яких проживає 12 людей, і загальною площею 1200 км^2",() => {
        village.ras();
        let s1=village.res;
        let s2=12*10/1200;
        expect(s1.toFixed(2)).toBe(s2.toFixed(2));
    })
});
describe('City Testing', () => {
    let city:City;
    beforeEach(() => {
        city=new City("City", 1200, 10000);
    })
    fit("Створили екземпляр класу City", () => {
        expect(city).toBeTruthy();
    })
    fit ("Розрахунок щільності населення для міста з населенням 1200 чоловік і загальною площею 1000 км^2",() => {
        city.ras();
        let s1=city.res;
        let s2=1200/10000;
        expect(s1.toFixed(2)).toBe(s2.toFixed(2));
    })
});