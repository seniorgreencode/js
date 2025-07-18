// interface Person { 
//    firstName:string, 
//    lastName:string, 
//    sayHi: ()=>string 
// } 

// var customer:Person = { 
//    firstName:"Ilkin",
//    lastName:"Guluzada", 
//    sayHi: ():string =>{return "Hi there"} 
// } 

// console.log("Customer Object ") 
// console.log(customer.firstName) 
// console.log(customer.lastName) 
// console.log(customer.sayHi()) 

interface Person { 
   firstName:string, 
   lastName:string, 
   sayHi: ()=>string 
} 

var customer:Person = { 
   firstName:"Tom", 
   lastName:"Hanks", 
   sayHi: ():string =>{return "Olá"} 
} 

console.log("Objeto do customer: ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var funcionario:Person = { 
   firstName:"Jim", 
   lastName:"Blakes", 
   sayHi: ():string =>{return "Olá!!"} 
} 

console.log("Objeto de funcionário: " + funcionario.firstName + funcionario.lastName);