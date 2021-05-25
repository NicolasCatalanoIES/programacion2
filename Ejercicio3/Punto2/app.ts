// 2. Dado el array ["azul", "verde", "rojo"] insertar la cadena "amarillo" entre "azul" y "verde". 
// También insertar "naranja" entre "verde" y "rojo". No se puede usar bucles. Usar una función que imprima por pantalla.


// 3. Dado el ejercicio anterior sacar del arreglo el color "verde"

const array: string[] = ["azul", "verde", "rojo"];

console.log("\n\n\t\t---------------------------------------------------");
console.log("\t\t------------------ ARRAY COLORES ------------------");
console.log("\t\t---------------------------------------------------\n\n");

console.log(array);
array.splice(1, 0, "amarillo");
console.log(array);
array.splice(array.indexOf("rojo"), 0, "naranja");
console.log(array);

array.splice(array.indexOf("verde"), 1) 
console.log("El array quedo de la sigueinte manera: ")
array.forEach(element => {
    console.log("\t - " + element);
});
