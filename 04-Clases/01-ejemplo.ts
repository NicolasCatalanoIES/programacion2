class Persona{
    constructor(private _nombre: string, private _apellido: string, 
        private _fechaNacimiento: Date,){}

    public get nombre(): string{
        return this._nombre;
    }
    public set nombre(n: string){
        this._nombre = n;
    }

    public nombreCompleto(): string{
        return this._nombre + " " + this._apellido;
    }

    private calcularEdad(): number{
        const diferenciaMs = Date.now() - this._fechaNacimiento.getTime();
        const edadDt = new Date(diferenciaMs);
        return Math.abs(edadDt.getUTCFullYear() - 1970);
    }

    public esMayorEdad(): boolean{
        return this.calcularEdad() >= 18;
    }

}

const p1 = new Persona('Juan', 'Perez', new Date("1995-04-28"));
console.log(p1);
console.log(`${p1.nombreCompleto()} y es mayor?: ${p1.esMayorEdad()}`);