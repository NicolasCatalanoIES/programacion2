import {
    Direccion,
    Cliente,
    Vendedor,
    Oportunidad,
    Producto,
    Categoria
} from "./Clases";



const vendedor1 = new Vendedor("Nicolas", 23145644);
const vendedor2 = new Vendedor("Mariana", 123456789);
vendedor1.crearDireccion("Siempre Viva", "Maipú", "Mendoza", 715);
vendedor2.crearDireccion("Siempre Muerta", "Guaymallen", "Mendoza", 517);


const categoriaJardineria = new Categoria("Jardineria");
const categoriaFerreteria = new Categoria("Ferreteria");
const categoriaPesca = new Categoria("Pesca");

const maseta = new Producto("Maseta", 1200, 600, categoriaJardineria);
const tierraFertil = new Producto("Tierra Fertil", 200, 150, categoriaJardineria);
const martillo = new Producto("Martillo", 250, 200, categoriaFerreteria);
const serrucho = new Producto("Serrucho", 450, 300, categoriaFerreteria);
const riel = new Producto("Riel", 1450, 900, categoriaPesca);
const carnada = new Producto("Carnada", 150, 70, categoriaPesca);


let clienteMiguel = new Cliente("Miguel", 4457340);
let clienteJose = new Cliente("Jose", 4897685);
clienteMiguel.crearDireccion("Nunca Viva", "Godoy Cruz", "Mendoza", 666);
clienteJose.crearDireccion("Nunca Muerta", "Ciudad", "Mendoza", 999);


// Creo las oportunidades de ventas
clienteMiguel.crearOporrunidad("Primera venta", 75.5, [maseta, martillo], vendedor1);
clienteMiguel.oportunidades[0].agregarProducto(serrucho);

clienteJose.crearOporrunidad("Primera venta", 10, [tierraFertil], vendedor1);

console.log("Cliente Jose");
console.log(clienteJose);
console.log("Cliente Miguel");
console.log(clienteMiguel);

// Si borramos a un cliente junto a el morira la dirección y la oportunidad
clienteJose = null;
// Pero aun tendremos los vendedores y los productos
