const ModelProducto = require('../models/producto_model');
const ModelUsuario = require('../models/usuario_model');

function errorHandler(data, next, err=null){
    if(err){
        return next(err);
    }
    if(!data){
        let error = new Error("No existe!");
        error.status = 404;
        return next(error);
    }
}

const addCarro = async (req, res, next) => {
    let productoId = req.body.productoId;
    let usuarioId = req.body.usuarioId;

    try {
        objProducto = await ModelProducto.findById(productoId).exec();
        if(!objProducto){
            err = new Error("No existe");
            err.statusCode = 404;
            throw(err);
        }

        objUsuario = await ModelUsuario.findById(usuarioId).exec();
        objUsuario = await objUsuario.addCarro(objProducto);
        res.json(objUsuario);
    } 
    catch (error) {
        next(error);
    }   
}

const removeCarrito = async (req, res, next) => {
    let productoId = req.body.productoId;
    let usuarioId = req.body.usuarioId;

    try {
        objProducto = await ModelProducto.findById(productoId).exec();
        if(!objProducto){
            err = new Error("No existe");
            err.statusCode = 404;
            throw(err);
        }

        objUsuario = await ModelUsuario.findById(usuarioId).exec();
        objUsuario = await objUsuario.removeCarrito(objProducto);
        res.json(objUsuario);
    } 
    catch (error) {
        next(error);
    } 
}

// const listarCarro = async (req, res) => {
//     let docUsuario = await ModelUsuario.findById(req.params.id).exec();
//     docUsuario.populate('cart.items.productId', '-imagen', (err, items) => {
//         if(err)
//             return res.json(err);
//         return res.json(items);
//     });
// }

const listarCarro = (req, res) => {
    ModelUsuario.findById(req.params.id).
    populate('cart.items.productId', '-imagen').exec((err, items) => {
        if(err)
            return res.json(err);
        return res.json(items);
    });
}

const limpiarCarro = async (req, res) => {
    let docUsuario = await ModelUsuario.findById(req.params.id).exec();
    await docUsuario.clearCarrito();
    return res.json(docUsuario);
}

module.exports = {
    addCarro,
    removeCarrito,
    listarCarro,
    limpiarCarro
}