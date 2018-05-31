const { crearArchivo, listar } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
var colors = require('colors');



let comando = argv._[0];

switch (comando) {
    case 'listar':
        //console.log(argv);
        listar(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log('Archivo creado:', colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido.');
        break;
}

// let parametro = argv[2]
// let base = parametro.split('=')[1];
//console.log(base);