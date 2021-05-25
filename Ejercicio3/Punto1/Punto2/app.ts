// 2. Crear una clase Escuela (1) que tiene un listado de Cursos (2) al 
// cual se le asignan Alumnos (2)

import {Escuela} from "./Escuela";
import {Direccion} from "./Direccion";
import {Curso} from "./Curso";
import {Alumno} from "./Alumno";

const direccionGeneral: Direccion= new Direccion("Patagonia 123", "Los olivos", "Lujan de Cuyo", "Mendoza", "Argentina");

const arrayAlumnos: Alumno[]= [];
const CARRERA: string= "Tecnicatura en desarrollo de Software";
const MATERIAS_ACTUALES: string[]= ["Programación", "Modelado de software", "Base de datos"];
const MATERIAS_ADEUDADAS: string[]= ["Requerimientos de software", "Inglés técnico I", "Lógica computacional"];

arrayAlumnos.push(new Alumno(direccionGeneral, CARRERA, MATERIAS_ACTUALES, 
    MATERIAS_ADEUDADAS, "Nicolas", "Catalano", 369852147));
arrayAlumnos.push(new Alumno(direccionGeneral, CARRERA, MATERIAS_ACTUALES, 
    MATERIAS_ADEUDADAS, "Pedro", "Escamoza", 456789312));
arrayAlumnos.push(new Alumno(direccionGeneral, CARRERA, MATERIAS_ACTUALES, 
    MATERIAS_ADEUDADAS, "Maria", "Coria", 456789311));
arrayAlumnos.push(new Alumno(direccionGeneral, CARRERA, MATERIAS_ACTUALES, 
    MATERIAS_ADEUDADAS, "Fernanda", "Lopez", 386951375));


const arrayCursos: Curso[]= [];
arrayCursos.push(new Curso(40, 20, 4, false, true, [arrayAlumnos[0], arrayAlumnos[1]]));
arrayCursos.push(new Curso(30, 15, 5, true, true, [arrayAlumnos[2], arrayAlumnos[3]]));

const ies9023: Escuela= new Escuela("Instituto de Educación Superior", direccionGeneral, 500, "9-023", arrayCursos);

console.log("\n\n\t\t---------------------------------------------------");
console.log("\t\t--------------- SISTEMA DE ESCUELAS ---------------");
console.log("\t\t---------------------------------------------------\n\n");
console.log(ies9023.verInfoEscuela());