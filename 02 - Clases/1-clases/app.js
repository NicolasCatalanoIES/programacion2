const Persona = require('./Persona');
const Auto = require('./Auto');

const persona1 = new Persona('Nico', 123456789);
console.log(persona1.obtenerDetalle());
persona1.saludar()

const a1 = new Auto('Peugueot');

a1.arrancar()
