class Auto {

    precio = '1.000.000,00';
        motor;

    constructor(mar,mod)
    {
        this.marca = mar;
        this.modelo = mod;
    }


    arranque() {
        console.log(`
        marca: ${this.marca}
        modelo: ${this.modelo}
        precio: ${this.precio}
        motor: ${this.motor}
        `);    
    }
}

const auto = new Auto('fiat','argo');

auto.motor = '1.4 TSI'

auto.arranque();
/*
exportado esta clase esta visible para los demas archivos
*/
//module.export = Auto;