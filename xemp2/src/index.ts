// let sales:number = 123_456_789;
// let course:string = "typescript";
// let is_published:boolean = true;
// let level;

// function render(document){
//     console.log(document);
    
// }


//arrays
// let numbers:number[] = [];
// numbers.forEach(n =>n.)


//tuples

// let user:[number,string] = [1,'Types']
// user.push(1); 
 
                //enum

// const small  = 1;
// const medium = 2;
// const large = 3;

//pascalCase

// const enum Size {Small = 1 , Medium , Large} ;
// let mySize:Size = Size.Medium;
// console.log(mySize);


//functions

// function calcTax(income:number, taxYear?:number){
//    if ((taxYear || 2022) < 2022)
//     return income *1.2;
// }

// calcTax(10_000)


//objects

// let employee:{
//     id:number,
//     name?: string,
//     retire:(date : Date) =>void
// } = {id : 1 ,  
//     name : 'Types',
//     retire:(date: Date) =>{
//         console.log(date);
        
//     }
// };

//type aliases

// type Employ = {
//     id:number,
//     name?: string,
//     retire:(date : Date) =>void
// }

// let employee: Employ = {id : 1 ,  
//     name : 'Types',
//     retire:(date: Date) =>{
//         console.log(date);
        
//     }
// };

//union Types

// function KgToLbs(weight:number|string){
//     //Narrowing
//     if(typeof weight === 'number'){
//         return weight * 2.2 ;
     
//     }
//     else{
//         return parseInt(weight)*2.2
//     }
// }

// KgToLbs(10);
// KgToLbs('10kgs');



//insertion types

// type Draggable ={
//     drag : () => void
// };

// type Resizable = {
//     resize : ()=> void
// };

// type UIWidget = Draggable & Resizable;

// let textBox : UIWidget={
//     drag:()=>{},
//     resize:()=>{}

// }



//Literals


// type Quantity =  50 |100;
// let quantity: Quantity = 100; 

//Nullable Types

// function greet (name:string | null | undefined){
//     if (name)
//     console.log(name.toUpperCase());
//     else
//     console.log('Hola!');
    
// }
// greet (undefined);

//OPtional Chaining

// type Customer={
//     birthday: Date
// };

// function getCustomer(id:number) :Customer | null{
//     return id ===0 ? null : {birthday:new Date()}


// }
// let customer = getCustomer(2);
// //optional property access operator
//     console.log(customer?.birthday.getFullYear());


//Constructor

class Point{
    constructor(public x?:number,private y?:number){
        this.x = x;
        this.y = y;
    }
    draw(){
        console.log('X:' + this.x +', Y: '+this.y ) ;
        
    }
    get X(){
        return this.x;
    }
    setX(value: number){
        if (value < 0)
        throw  new Error('value cannot be less than 0.')
        this.x = value;
    }
}

let point = new Point(1,2 );
let x =point.X;
point.x = 10; 
point.draw ()