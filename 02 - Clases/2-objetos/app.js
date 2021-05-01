class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}


const p1 = new Persona('Juan', 22);
const p2 = new Persona('Romina', 44);

console.log(p1);
console.log(JSON.stringify(p1));

const p3 = {
    "nombre": "Pedro",
}

const array = [1, "Hola", p1, [1, 2, 3]];

console.log(typeof array);
console.log(JSON.stringify(array));