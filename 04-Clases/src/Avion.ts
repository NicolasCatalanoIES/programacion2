export class Avion{
    constructor(private _cantidadButacas: number, 
                private _modelo: string,){}

    public describirAvion(): string{
        return `El avion ${this._modelo} tiene ${this._cantidadButacas}`;
    }
}

const a1 = new Avion(320, "Boing");