import { PersonProps } from "./interfaces/interfaces";

// const person2: PersonProps = {
//     name: 'Carlos',
//     address: {
//         num: 22,
//         street: 'Tempestad',
//         province: 'San Jeronimo'
//     },
//     email: 'Carlos@gmail.com',
//     hobbies: ['Jugar', 'Programar', 'Besar a su novia']
// }

// PROPIEDADES DEL OBJETO CON INTERFACES 
const person: PersonProps = {
    name: 'Keila',
    address: {
        street: 'Lluvia',
        num: 'Rtno 50',
        province: 'Cuatro Vientos',
    },
    email: 'keila19gutierrez@gmail.com',
    hobbies: ['Comer crepas', 'Ver a su novio']
};


// Forma extensa para renombrar y mandar a llamar objetos

// let emailUser: string = person2.email;
// let hobbiesUser: string[] = person2.hobbies;
// let nombreUser: string = person2.name;
// let calle: string = person2.address.street;
// let numeroExterior: string | number = person2.address.num;

// let card: string = `
//     Nombre de Usuario: ${name}
//     ================================
//     -------Datos del contacto-------
//     Correo electronico: ${email}
//     Direccion de emergencia: 
//         calle: ${street}
//         Numero Exterior: ${num}
//     ================================
// `

// DESESTRUCTURACIÓN 
const { name:nombreUser, address, email:emailUser } = person;
const { num: numeroExterior, street: calle} = address;
//console.log(numeroExterior);

let card: string =  `
    Nombre de Usuario: ${nombreUser}
    ================================
    -------Datos del contacto-------
    Correo electronico: ${emailUser}
    Direccion de emergencia: 
    calle: ${calle}
    Numero Exterior: ${numeroExterior}
    ================================
    `
console.log( card );





/* import { v4 as uuidv4 } from 'uuid';

const data = {
    id: uuidv4(),
    password: '1234',
    email: 'keila19gutierrez@gmail.com',
    departament: 'Informática', 
}

let authenticaded: boolean = true; 
if( data.email === 'keila19gutierrez@gmail.com' && data.password === '1234'){
    authenticaded = true
}
else{
    authenticaded = false
}

let message: string = '';

( authenticaded )
    ? `
    Usuario autenticado correctamente
    ${JSON.stringify(data)}
    `
    : 'Usuario no autenticado'


console.log(message);
*/