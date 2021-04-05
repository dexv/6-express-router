const data = [
    {
        id: 123,
        usuario: "user1"
    },
    {
        id: 124,
        usuario: "user2"
    }
];

function listar(req, res){
    res.json({
        categorias: data
    })
}

function getUsuario(req, res){
    res.json({
        id: 124,
        usuario: "user2"
    })
}

function guardar(req, res){
    res.json({
        message: "Guardado"
    })
}

function borrar(req, res){
    res.json({
        message: "Guardado"
    })
}

function actualizar(req, res){
    res.json({
        message: "Actualizado"
    })
}

module.exports = {
    listar,
    getUsuario,
    guardar,
    borrar,
    actualizar
}