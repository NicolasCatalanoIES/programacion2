let nombre: string = "Juan";
nombre = "Lucia";

const PI: number = 3.14;

let esObjeto: boolean;

esObjeto = true;

function esNull(nombre: string): boolean{
    if(nombre === null){
        return true;
    }
    else{
        return false
    }
}

const arregloNumeros: number[] = [1, 2, 3, 4, 5]

function sumando(array: number[]): number{
    let suma: number = 0
    for(let a of array){
        suma += a
    }
    
    return suma
}

console.info(sumando(arregloNumeros));

class Persona{
    nombre: string;
    _edad: number;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this._edad = edad;
    }

    saludar(nombre: string): void{
        console.info(`Hola ${nombre}, yo soy ${this.nombre} y mi edad es ${this._edad}`);
    }

}

const persona1 = new Persona("Juan", 33);
console.info(persona1.nombre);
persona1.saludar("Pepe");

const p2 = new Persona("Analia", 22);
p2.saludar("Pedro");


const arr: number[] = [1, 2, 3, 5, 6, 8, 9];

arr.push(2);
// arr.push("aaa");

const mostrarArreglo = (array: number[]): void => {
    for(let v of array){
        console.log(v);
    }
}

mostrarArreglo(arr);
arr.push(22);
arr.push(33);
arr.push(44);

console.warn("-----------------------");

mostrarArreglo(arr);
arr.pop()  // Eliminamos el último elemento


console.warn("-----------------------");

mostrarArreglo(arr);