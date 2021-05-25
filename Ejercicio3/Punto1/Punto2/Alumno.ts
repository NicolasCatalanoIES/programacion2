import {Direccion} from "./Direccion";

export class Alumno {
    constructor(public direccion: Direccion= new Direccion(), public carrera: string= " ",
                public materiasActuales: string[]= [], public  materiasAdeudadas: string[]= [], 
                public nombre: string= " ", public apellido: string = " ",
                public dni: number= 0){}
}