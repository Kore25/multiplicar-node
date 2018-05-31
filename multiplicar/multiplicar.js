const fs = require('fs');
var colors = require('colors');

let listar = (base, limite) => {

    console.log('================'.green);
    console.log(`Tabla de ${base}`.green);
    console.log('================'.green);


    for (let x = 0; x <= limite; x++) {
        console.log(`${base} * ${x} = ${base * x}`);
    }

}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base} no es un numero.`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}


module.exports = {
    crearArchivo,
    listar
}