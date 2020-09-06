const varDescripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const varCompletado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente la tarea'
}

const opcComandoCrear = {
    descripcion: varDescripcion
};

const opcComandoListar = {

};

const opcComandoAct = {
    descripcion: varDescripcion,
    completado: varCompletado
};

const opcComandoBorrar = {
    descripcion: varDescripcion
};

const argv = require('yargs')
    .command('crear', 'Crea una tarea pendiente de hacer', opcComandoCrear)
    .command('listar', 'Lista todas las tareas que están pendientes de hacer', opcComandoListar)
    .command('actualizar', 'Actualiza una tarea', opcComandoAct)
    .command('borrar', 'Elimina una tarea', opcComandoBorrar)
    .help()
    .argv;

module.exports = {
    argv
}