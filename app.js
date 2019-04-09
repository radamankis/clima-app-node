const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: "d",
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


// const resp = lugar.geLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(-40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const coord = await lugar.geLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);
        return `El clima de ${coord.direccion} es de ${temp}`;

    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;

    }




    //salida
}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);