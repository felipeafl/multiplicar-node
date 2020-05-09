//requiere
// const fs = require('express');
// const fs = require('./fs');
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base ingresada: ${base} no es un numero`)
            return;
        }
        if (!Number(limite)) {
            reject(`El limite ingresado: ${base} no es un numero`)
            return;
        }
        console.log('==================='.green);
        console.log(`Tabla con base ${base}`.green)
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}\n`);

        };

    });
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`la base ingresada: ${base} no es un numero`)
            return;
        }
        if (!Number(limite)) {
            reject(`El limite ingresado: ${base} no es un numero`)
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        };

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt `);
        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}