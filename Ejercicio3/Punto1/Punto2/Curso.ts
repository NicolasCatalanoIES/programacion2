import {Alumno} from "./Alumno";

export class Curso {
    constructor(public cantidadSillas: number=0, public cantidadBancos:number=0, 
               public cantidadVentanas: number, public tieneArmario: boolean=false, 
               public tieneEstufa: boolean=false, public alumnos: Alumno[]=[]){}
}