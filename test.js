import {verificarEquipo} from 'index'

console.log(prueba());

function prueba(){
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