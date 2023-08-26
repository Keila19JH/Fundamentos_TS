import './style.css'

let name: string,
    lastName: string,
    dateBirthday: string;
    
    name = 'Keila';
    lastName= 'Gutierrez';
    dateBirthday = '2003-11-19';

    // OTRA FORMA DE DECLARAR VARIABLES
    //let name1: string = 'Carlos'; 
    //let lastName1: string = 'Ortega';
    //let birthday1: string = '1995-01-22';

    // Concatenación de variables
    let fullName: string  = name + ' ' + lastName;
   
    // Interpolacion de strings
    fullName = `${name} ${lastName}`;
    
    
    // Salto de linea en un string \n
    fullName = name + '\n' + lastName;
    // console.log('salto de linea: ', fullName);

    // Tabulacion en un string \t
    fullName = name + '\t' + lastName;
    // console.log('tabulacion: ', fullName);



    // CÓMO UTILIZAR MÉTODOS E ÍNDICES
    
    // Método substring()
    // Extrae un texto o caracter en un rango determinado
    let onlyName = fullName.substring(0 , 5);
    console.log(onlyName);


     // Método split()
    // Divide la cadena de un arreglo, indicando su separador
    let onlyNameSplit: string = fullName.split('')[0];
    console.log(onlyNameSplit);


    // Método toUpperCase()
    // Convierte a MAYUSCULAS un texto
    let fullNameUpperCase: string = fullName.toUpperCase();
    console.log(fullNameUpperCase);
    

    // Método toLowerCase()
    // Convierte a minisculas un texto
    let fullNameToLowerCase: string = fullNameUpperCase.toLowerCase();
    console.log(fullNameToLowerCase);


    // Metodo trim()
    // Borra los espacios al inicio y al final de un texto
    let message: string = '    Necesito que me contestes yaaaa      ';
    console.log(message.trim());


    // Método slice()
    //Extrae un fragmento de texto mediante el indice inicial y retorna un nuevo string
    let pharagraph = 'Aprendiendo de Typescript y sus fundamentos.';
    let p = pharagraph.slice(12);
    console.log( p );


    // Método replace()
    //Remplaza un valor dentro de un string por otro valor
    let text = 'Hola mundo mundo mundo mundo';
    let replaceText = text.replace('mundo', 'a todos');
    console.log(replaceText);


    // Método replaceAll()
    // Remplaza todas las coincidencias en un texto (en este caso, reemplaza todos los 'mundos', por 'a todos')
    replaceText = text.replaceAll('mundo', 'a todos');
    console.log(replaceText);
    


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  
  <div>

  </div>
`

//setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)