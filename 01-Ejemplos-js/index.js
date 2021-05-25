mostrar = console.log;

let arreglo = [8, 5, 2, 8, 1, 9, 1];

function cuentaArray(array){
    cuenta = 0;
    for (const valor of array) {
        cuenta++;
    }
    return cuenta;
}

function sumaArray(array){
    suma = 0;
    for (const valor of array) {
        suma += valor;
    }
    return suma;
}

function ordenarArray(array){
    let arrOrdenado = [];
    let mayor = 0 ;
    while (array.length > 0) {
        for (const valor of array) {
            if (valor > mayor) {
                mayor = valor;
            }
        }
        arrOrdenado.unshift(mayor);
        array.splice(array.indexOf(mayor), 1);
        mayor = 0;
    }
    return arrOrdenado;
}

const metrosAKilometros = num => num / 1000;

const verificarEquipo = equipo => EQUIPOS.includes(equipo.toLowerCase())? "Equipo encontrado" : "Equipo no encontrado";

mostrar(cuentaArray(arreglo));
mostrar(sumaArray(arreglo));
mostrar(ordenarArray(arreglo));
mostrar(`Tienes ${metrosAKilometros(10000)} km en 10000 metros`);

const EQUIPOS = ["boca", "river", "racing", "independiente", "velez"]

mostrar(verificarEquipo("Boca"));
mostrar(verificarEquipo("Gutierrez"));


//  Prueba unitarias :D

function pruebas(){
    if (verificarEquipo("boca") !== "Equipo encontrado"){    
      return false;
    }
    else if (verificarEquipo("BOCA") !== "Equipo encontrado"){    
      return false;
    }
    else if (verificarEquipo("AAAA") !== "Equipo no encontrado"){    
      return false;
    }
    else if (verificarEquipo("") !== "Equipo no encontrado"){    
      return false;
    }
    try{
      if (verificarEquipo(11) !== "Equipo no encontrado"){    
        return false;
      }
    }catch (e){
      
      if (e.message != "equipo.toLowerCase is not a function"){
        return false
      }
    }
    try{
      if (verificarEquipo(true) !== "Equipo no encontrado"){    
        return false;
      }
    }catch (e){
      
      if (e.message != "equipo.toLowerCase is not a function"){
        return false
      }
    }
  
    return true
  
  }

let prueba = pruebas() ? "Exitosas": "Fallaron";
mostrar(`Las prueba fueron ${prueba}`);