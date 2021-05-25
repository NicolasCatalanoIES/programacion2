// 3. Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y sacar fondos
// Si le asignamos más de 500000 disparamos una alarma
// Si intentamos sacar más de lo que disponemos disparamos otra alarma
// Si intentamos sacar más de 100000 disparamos otra alarma

import {CuentaBancaria} from './CuentaBancaria';

console.log("\n\n\t\t---------------------------------------------------");
console.log("\t\t----------------- SISTEMA DE BANCO ----------------");
console.log("\t\t---------------------------------------------------\n\n");


const cuentaPersonal: CuentaBancaria= new CuentaBancaria();

console.log("Monto disponible a la hora de crear la cuenta:\n\t" + cuentaPersonal.montoDisponible);
cuentaPersonal.asignar(100);
console.log("Monto disponible despues de asignar $100 a la cuenta:\n\t" + cuentaPersonal.montoDisponible);
cuentaPersonal.extraer(100);
console.log("Monto disponible despues de extraer $100 a la cuenta:\n\t" + cuentaPersonal.montoDisponible);

try {
    cuentaPersonal.asignar(50505050549835);
} catch (error) {
    console.error("\n\t------- Ha ocurrido un error -------\n");
    console.error(error.message);
}
