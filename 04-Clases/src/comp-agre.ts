class Empresa{
    private empleados: Empleado[];
    private clientes: Cliente[];
    constructor(){
        this.empleados = [];
        this.empleados.push(new Empleado('Juan', '456789233'));
        this.empleados.push(new Empleado('Romina', '7987666'));
    }

    public agregarCliente(cliente: Cliente): void{
        if(!this.clientes){
            this.clientes = [];
        }
        this.clientes.push(cliente);
    }
}

class Empleado{
    constructor(public nombre: string, public dni: string){}
}

class Cliente{
    razonSocial: string;
    cuil: string;
}

const emp = new Empresa();