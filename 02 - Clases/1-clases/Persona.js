class Persona{
    constructor(nombre, dni){
        this.nombre = nombre;
        this.dni = dni;
    }

    obtenerDetalle(){
        return `Mi nombre es ${this.nombre} - DNI: ${this.dni}`;
    }

    saludar(){
        console.log("Hola mi nombre es " + this.nombre);
    }
}
module.exports = Persona;