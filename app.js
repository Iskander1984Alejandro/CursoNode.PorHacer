// // const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
let colors = require('colors');

// console.log(argv);



const listarTareas = () => {
    let listado = porHacer.getListado();
    console.log('==========Por hacer======='.green);
    for (let tarea of listado) {
        console.log(`Descripción: ${tarea.descripcion}`);
        console.log(`Completado: ${tarea.completado}`);
        console.log('-----------');
    }
    console.log('=========================='.green);
}

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log('Crear tarea', tarea);
        break;
    case 'listar':
        console.log('Listar tareas por hacer');
        listarTareas();
        break;
    case 'actualizar':
        console.log('Actualizar tarea');
        if (porHacer.actualizar(argv.descripcion, argv.completado)) {
            console.log('Tarea actualizada!'.green);
        } else {
            console.log('Tarea no encontrada :('.red);
        }
        break;
    case 'borrar':
        if (porHacer.borrar(argv.descripcion)) {
            console.log('La tarea se ha eliminado con exito!'.green);
        } else {
            console.log('Tarea no encontrada :('.red);
        }
        break;
    default:
        console.log('Comando no reconocido');
}