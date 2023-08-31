import './style.css'

// Exercise 
let a: number = 3; 
let b: number = 7;
let c: number = -10;


let equationPlus: number = (-b + (Math.sqrt((b*b) -(4)*(a)*(c)))) / 2 * a;
console.log(equationPlus);

let equationLess: number = (-b - (Math.sqrt(Math.pow(b, 2) - 4*(a*c)))) / 2 * a;
console.log(equationLess);

/* let edad: number = 39;

// Convertir números a string 
let edadString: string = edad.toString();

// Método valueof: Retorna el valor primitivo de un objeto
let year: number = 2023;
console.log({edad, edadString, year: year.valueOf()});

// Operadores basicos + - *

let addition: number = 10 + 20;
//console.log(`La suma es: ${addition + 10}`);

// Order of operations

let operation: number = (5 + (7 *9));
console.log(operation);


// Método Math.min
let number1: number = 10, number2: number = 5, number3: number = 7;
let answer: string;

if(number1 > number2 && number1 > number3){
  answer = `El numero mayor es: ${number1}`
}
else{ 
  if(number2 > number1 && number2 > number3){
    answer = `El numero mayor es: ${number2}`
  }
else{
  answer = `El numero mayor es: ${number3} `
  }
}


// Método min
let smallestNumber: number = Math.min(number1, number2, number3);
answer = `El numero menos es ${smallestNumber}`;

// Método max
let larsgestNumber: number = Math.min(number1, number2, number3);
answer = `El numero menos es ${larsgestNumber}`;

// Método root
let numberSqrt: number = 16; 
let resp: number = Math.sqrt(numberSqrt);
console.log(resp);

// Método pow
let numberPow: number = Math.pow(2, 8);
console.log(numberPow);

// Método round, toFixed
let decimal: number = 10.525123123123123123;
//round
console.log( Math.round(decimal) );

//toFixed
console.log( `fixed: ${decimal.toFixed(2)}` );

//convert string to number
let numberString: string = '1998';
//let stringToNumber: number = Number(numberString);
let stringToNumber: number = +numberString;
*/ 


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  
  <div>

  </div>
` ;