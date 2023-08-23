import { generateFavoriteFoods, generateHobbiesList } from './generator';
import './style.css'

//strings
let name: string;
name = 'Keila';

//numbers
const age:number = 19;
const legalAge: number = 18; 
//boolean
let isOfLegalAge: boolean; 

//condicionales
if( age >= legalAge ){

  isOfLegalAge = true;
}
else{
  isOfLegalAge = false;
}

//arrays
const hobbies: ( string )[] = [
  'Comer',
  'Estudiar Ingles',
  'Escuchar musica',
];

const favoriteFoods: string[] = [
  'Tortas de papa',
  'Chilaquiles',
  'Sopa',
  'Flan napolitano',
];





document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
  <h2> Nombre: ${name} </h2>
  <h3> Edad: ${age} </h3>
  <span> Es mayor de edad?: ${(isOfLegalAge)? 'si' : 'no'} </spean>
  <hr/>

  <h3> Ciclo for para hobbies </h3>
  <u1>

   ${ generateHobbiesList(hobbies) }
  </ul>
  


  <hr/>
    <h3>Ciclo for para comidas</h3>
    <ul>
      ${ generateFavoriteFoods(favoriteFoods)}
    </ul>

  </div>
`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
