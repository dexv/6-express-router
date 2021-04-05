const data = [
    {
        id: 123,
        categoria: "Polos",
        producto: "Polo Rambo"
    },
    {
        id: 124,
        categoria: "Polos",
        producto: "Polo Levy"
    }
];

function listar(req, res){
    res.json({
        categorias: data
    })
}

function getProducto(req, res){
    res.json({
        id: 124,
        categoria: "Polos",
        producto: "Polo Levy"
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
    getProducto,
    guardar,
    borrar,
    actualizar
}