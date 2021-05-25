export class Auto{
    constructor(public marca: string = "Sin marca", public modelo: string="Sin Modelo", 
                public potencia: number=1, public maxVelocidad: number=1){}
    
    public verAuto(): string{
        return `El autos es un ${this.marca} modelo ${this.modelo} 
        - Su pfotencia es de ${this.potencia} cc
        - Su velocidad maxima es de ${this.maxVelocidad} /KH`;
    }
    
    public calcularTiempo(kilometros: number){
        let resultadoDivision: number= kilometros / this.maxVelocidad;
        return this.transformoNumEnHora(resultadoDivision);    
    }

    private transformoNumEnHora(numero: number): number{
        let numSeparadoPorComa: string[] = numero.toString().split(".");
        if (numSeparadoPorComa.length > 1) {
            let parteDecimal: number = parseInt(numSeparadoPorComa[1][0] + numSeparadoPorComa[1][1]);
            let cambioNumPorHora: number= Math.round(parteDecimal * 60 / 100);
            return parseFloat(numSeparadoPorComa[0] + "." + cambioNumPorHora.toString());
        } else {
            return numero
        }
    }
}
