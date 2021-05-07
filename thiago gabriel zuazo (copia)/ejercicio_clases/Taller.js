class Taller {

    libreria_css;
    servicio_google;

    constructor(nom,len)
    {
       this.nombre_taller = nom
       this.lenguaje_de_programacion = len
    }


    mostrar_datos() {
        console.log(`
            el nombre del taller es:${this.nombre_taller}
            el lenguaje que utiliza es:${this.lenguaje_de_programacion}
            la libreria qe usa es:${this.libreria_css}
            el servicio que usa es:${this.servicio_google}

        `);    
    }
}

const taller = new Taller('programacion','java');
taller.servicio_google = 'firebase';
taller.libreria_css = 'bootstrap';


taller.mostrar_datos();