import {Staff} from './interfacepage.page'
import {Engineer} from './interfacepage.page'
import {Administration} from './interfacepage.page';
import {Show_Console} from './interfacepage.page'
import { exception } from "console";

describe('Staff, Engineer and Administration Testing', () => {
let shower:Show_Console;
let staff:Staff;
let engineer:Engineer;
let administration:Administration;
beforeEach( ()=>
{
shower=new Show_Console();
staff= new Staff("Кадри",95,35, shower);
engineer= new Engineer("Василь",95,35, shower);
administration= new Administration ("Адміністрація", 25, shower);
}
)
    

fit("Створення екземпляру класу Shower", ()=>{
expect(shower).toBeTruthy();
})


fit("Створення екземпляру класу Staff", ()=>{
expect(staff).toBeTruthy();
})

fit("Створення екземпляру класу Engineer", ()=>{
    expect(engineer).toBeTruthy();
 })


fit("Створення екземпляру класу Administration",()=>{
expect (administration).toBeTruthy();
})
});