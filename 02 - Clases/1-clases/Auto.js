class Auto{
    constructor(marca){
        this.marca = marca;
    }
    
    arrancar(){
        console.log(`Arrancando auto ${this.marca}`);
    }

    esVendible(){
        if (this.marca == 'Peugeot' || this.marca == 'Ford') {
            return true;
        }
        return false;
    }

}

module.exports = Auto;