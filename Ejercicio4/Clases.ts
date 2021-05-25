export class Direccion{
    constructor(private _calle: string,
                private _departamento: string,
                private _provincia: string,
                private _numero: number){};

}

export class Persona{
    protected _direccion: Direccion;
    
    constructor(protected _nombre: string,
                protected _telefono: number,
                calle: string= "sin calle", 
                departamento: string = "sin departamento",
                provincia: string = "sin provincia",
                numero: number= 0){
        
        this._direccion = new Direccion(calle, departamento, provincia, numero);
    }
    
    crearDireccion(calle: string, departamento: string,
                   provincia: string, numero: number):void {
        this._direccion = new Direccion(calle, departamento, provincia, numero);
    }

    cambiarNombre(nuevoNombre: string): void{
        this._nombre = nuevoNombre;
    }

}

export class Cliente  extends Persona{
    private _oportunidades: Oportunidad[] = [];

    constructor(nombre: string,
                telefono: number){
        super(nombre, telefono);
    }
    
    crearOporrunidad(nombre: string,
                    probabilidadVenta: number,
                    productos: Producto[],
                    vendedor: Vendedor){
        this._oportunidades.push(new Oportunidad(nombre,
                                            this,
                                            probabilidadVenta,
                                            productos,
                                            vendedor
        ))
    }
    get oportunidades(){
        return this._oportunidades;
    }
}

export class Vendedor  extends Persona{
    private _numeroVentas: number = 0;
    private _activo: boolean;
    constructor(nombre: string,
                telefono: number){
        super(nombre, telefono);
        this._activo = true;
    }
    cambiarEstado(): boolean {
        this._activo = !this._activo;
        return this._activo;
    }
}


export class Oportunidad{
    private _activo: boolean = true;

    constructor(private _nombre: string,
                private _cliente: Cliente,
                private _probabilidadVenta: number,
                private _productos: Producto[],
                private _vendedor: Vendedor,
    ){}

    agregarProducto(nuevoProducto: Producto): void{
        this._productos.push(nuevoProducto);
    }

    cambiarEstado(): boolean {
        this._activo = !this._activo;
        return this._activo;
    }

}

export class Producto{
    constructor(private _nombre: string,
                private _costoFinal: number,
                private _costoProduccion: number,
                private _categoria: Categoria
    ){
        this._categoria.agregarProducto(this)
    }

    cambiarCostoFinal(nuevoCostoFinal: number): void{
        this._costoFinal = nuevoCostoFinal;
    }
}

export class Categoria{
    private _activo: boolean = true;
    private _productos: Producto[] = []

    constructor(private _nombre: string
    ){}

    agregarProducto(nuevoProducto: Producto): void{
        this._productos.push(nuevoProducto);
    }
    
    cambiarEstado(): boolean {
        this._activo = !this._activo;
        return this._activo;
    }
    
    get productos(){
        return this._productos;
    }
}

