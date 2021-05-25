var nombre = "Juan";
nombre = "Lucia";
var PI = 3.14;
var esObjeto;
esObjeto = true;
function esNull(nombre) {
    if (nombre === null) {
        return true;
    }
    else {
        return false;
    }
}
var arregloNumeros = [1, 2, 3, 4, 5];
function sumando(array) {
    var suma = 0;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var a = array_1[_i];
        suma += a;
    }
    return suma;
}
console.info(sumando(arregloNumeros));
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this._edad = edad;
    }
    Persona.prototype.saludar = function (nombre) {
        console.info("Hola " + nombre + ", yo soy " + this.nombre + " y mi edad es " + this._edad);
    };
    return Persona;
}());
var persona1 = new Persona("Juan", 33);
console.info(persona1.nombre);
persona1.saludar("Pepe");
var p2 = new Persona("Analia", 22);
p2.saludar("Pedro");
