// 3. Crear una clase Cuenta Bancaria a la cual le podemos asignar fondos y sacar fondos
// Si le asignamos más de 500000 disparamos una alarma
// Si intentamos sacar más de lo que disponemos disparamos otra alarma
// Si intentamos sacar más de 100000 disparamos otra alarma

export class CuentaBancaria{
    private _montoDisponible: number= 0;
    constructor(){}
    asignar(monto: number): void{
        if (monto > 500000) {
            throw new Error("No se puede asignar un monto tan elevado, comuniquese con su entidad bancaria");
        } else {
            this._montoDisponible += monto;
        }
    }
    extraer(monto: number): void{
        if( typeof monto !== "number"  || monto < 0){
            throw new Error("El monto a extraer debe ser un número positivo");
        }
        else{
            if (monto > 100000) {
                throw new Error("No se puede extraer un monto tan elevado, comuniquese con su entidad bancaria");
            } else {
                if (monto > this._montoDisponible) {
                    throw new Error("No se puede extraer un monto mayor al disponible. Su monto es " + this._montoDisponible);
                } else {
                    this._montoDisponible -= monto
                }
            }
        }
    }
    get montoDisponible(): number{
        return this._montoDisponible;
    }
}