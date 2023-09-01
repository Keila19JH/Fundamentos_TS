import './style.css'

// Basic Structure if(){}
// Operadores de condicion >, <, >=, <=, ==, !=
// PROPOSICIÓN QUE SE TIENE QUE CUMPLIR para condicionales || and && : || (se puede cumplir siempre y cuando una condición que se cumpla basta), 
// && (se tiene que cumplir toda la condición).


// Basic

let ifExist: boolean = true;
let number: number = 10;

if( ifExist ){
  console.log('Si existe');
}

//if( number > 10 && number < 15 ){
//  console.log('Esta en el rango');
//}

if( number > 10 || (number < 15 && number > 0) ){
  console.log('Esta en el rango');
}
// else
let edad: number = 20;

if( edad > 60 ){
  console.log('Abuelo');
}
else{
  console.log('joven');
}

// NESTED CONDITIONAL (IF ANIDADOS)
let number1: number = 30;
let number2: number = 31;
let number3: number = 100;

// What´s the max number?
if( number1 > number2 && number1 > number3){
  console.log(`El número mayor es: ${number1}`);
}
else{
  if(number2 > number1 && number2 > number3){
    console.log(`El número mayor es: ${number2}`);
  }
  else{
  console.log(`El número mayor es: ${number3}`);
  }
}

// TERNARY CONDITIONAL (Trabaja con código de una sola linea)
let message: string = 'not authenticated';

// si cumple se pone un ?, si no se cumple se pone un :
(message === 'authenticated')
  ? console.log('usario autenticado')
  : console.log('usario denegado');

// Solo es por si se tiene que cumplir, no muestra más ni ejecuta más
(message === 'authenticated')
  && console.log('usario autenticado');

// Exactamente igual(===) e igual (==)
let num1: number = 8, num2: string = '8';

// + o number (para convertir un string a number)
if ( num1 === +num2){
  console.log('Si es igual');

}


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  
  <div>

  </div>
` ;