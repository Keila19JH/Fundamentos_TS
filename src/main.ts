import './style.css'

let cadena: string = 'Hola, Mundo'; 

///
if(cadena){
    console.log('La cadena esta llena' )
}
else{
  console.log('La cadena esta vacia')
}

///
console.log('La longitud de la cadena es de: ' + cadena.length);

//console.log('¿La palabra mundo esta incluida en el texto?: ' + cadena.includes("Mundo"));

///
if(cadena.includes('Mundo')){
  console.log('La cadena incluye: ' + cadena);
}
  else{
    console.log('La cadena incluye: ' + cadena);
  }

///
console.log(cadena.toUpperCase());

///
//console.log(cadena.split('')[0]);
console.log(cadena [cadena.length - 1]);

///
console.log(cadena.substring(11));



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  
  <div>

  </div>
` ;