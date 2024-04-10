// 1- FUNCIONES FLECHA

// function saludar() {
//     return "Hola";
//   }
const saludar = () => "hola"
console.log(saludar());

// function division(a,b) {
//   return a / b;
// }
const division = (a, b) => a / b
console.log(division(10, 2));

// function miNombre(nombre) {
//     return `Mi nombre es ${nombre}`;
//   }
const miNombre = nombre => {
    return `Mi nombre es ${nombre}`
};
console.log(miNombre("Sento"));

// function test2() {
//     console.log("Función test 2 ejecutada.");
//   }
//   function test1(callback) {
//     callback();
//   }	

const test2 = () => {
    return "Función test 2 ejecutada."
}
console.log(test2());

// 2- FOREACH

let gente = [
    {
        nombre: "Jamiro",
        edad: 45,
    },
    {
        nombre: "Juan",
        edad: 35,
    },
    {
        nombre: "Paco",
        edad: 34,
    },
    {
        nombre: "Pepe",
        edad: 14,
    },
    {
        nombre: "Pilar",
        edad: 24,
    },
    {
        nombre: "Laura",
        edad: 24,
    },
    {
        nombre: "Jenny",
        edad: 10,
    },
];

// Crea un array con la gente mayor de 25 años y muéstralo por consola.

const genteMayor25 = []

gente.forEach(person => {
    if(person.edad > 25){
        genteMayor25.push(person)
    }
});

console.log(genteMayor25)


// const mayoresEdad =[]
// for (let index = 0; index < gente.length; index++) {
//     console.log(gente[index]);
//     if(gente[index].edad> 25){
//         mayoresEdad.push(gente[index])
//     }  
// }
// console.log(mayoresEdad);


// Crea un array con gente que empieza por J

const genteEmpiezaJ = []
gente.forEach(person => {
    if (person.nombre.startsWith("J")) {
        genteEmpiezaJ.push(person)
    };
});
console.log(genteEmpiezaJ);

// 3- MAP

// Utilizando el array de antes crea un array con la gente mayor de 25 años y muéstralo por consola. 

const genteMayorA25 = gente.map((person) =>{
    return person
})
// console.log();

// Crea un array con la gente que empieza por J. 

// Dado el siguiente array, crear otro que sea el resultado de elevar cada número a si mismo:
const numbers = [ 4, 5, 6, 7, 8, 9, 10];
// Resultado esperado
// [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]


// 4- FILTER

// Crea un segundo array que devuelva los impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Dado el siguiente array, genera un segundo array que filtre los platos veganos y saque una sentencia como la del ejemplo:

const foodList = [
    { name: 'Tempeh', isVeggie: true },
    { name: 'Cheesbacon burguer', isVeggie: false },
    { name: 'Tofu burguer', isVeggie: true },
    { name: 'Entrecot', isVeggie: false }
  ];
  /* [
      'Que rico Tempeh me voy a comer!',
      'Que rica Tofu burguer me voy a comer!'
     ]
  */


// 5- REDUCE

// Dado el siguiente array, obtén la multiplicación de todos los elementos del array:

const numeros = [39, 2, 4, 25, 62];
// Salida--> 483600
