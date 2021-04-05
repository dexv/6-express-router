const data = [
    {
        id: 123,
        nombre: "Polos"
    },
    {
        id: 124,
        nombre: "Pantalones"
    }
];

function listar(req, res){
    res.json({
        categorias: data
    })
}

function getCategoria(req, res){
    res.json({
        id: 124,
        nombre: "Pantalones"
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
    getCategoria,
    guardar,
    borrar,
    actualizar
}