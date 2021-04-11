const ModelProducto = require('../models/producto_model');

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

function listar(req, res, next){
    ModelProducto.find()
    .select('-imagen')
    .exec((err, item) => {
        if(err || !item)
            return errorHandler(item, next, err);
        return res.json({
            data: item
        });
    });
}

function productoById(req, res, next, id){
    //let id = req.params.id;
    ModelProducto.findById(id, (err, item) => {
        if(err || !item)
            return errorHandler(item, next, err);
        req.item = item;
        next();
    });
}

function getProducto(req, res, next){
    return res.json({
        data: req.item
    });
}

function guardar(req, res, next){
    const data = {
        producto_nombre : req.body.producto_nombre,
        descripcion : req.body.descripcion,
        precio : req.body.precio,
        stock : req.body.stock,
        categoria_nombre : req.body.categoria_nombre
    }

    let modelProducto = new ModelProducto(data);
    if(req.files){
        modelProducto.imagen.data = req.files.imagen.data,
        modelProducto.imagen.contentType = req.files.imagen.mimetype;
    }
    modelProducto.save((err, item) => {
        if(err || !item)
            return errorHandler(item, next, err);
        
        item = item.toObject();
        delete item.imagen;
        return res.json({
            message: item
        })
    });
}

function borrar(req, res, next){
    let id = req.params.id;
    ModelProducto.findByIdAndRemove(id, (err, item) => {
        if(err || !item)
            return errorHandler(item, next, err);
        return res.json({
            data: item
        });
    });
}

function actualizar(req, res, next){
    let id = req.params.id;
    let data = {
        producto_nombre : req.body.producto_nombre,
        descripcion : req.body.descripcion,
        precio : req.body.precio,
        stock : req.body.stock,
        categoria_nombre : req.body.categoria_nombre
    }
    ModelProducto.findByIdAndUpdate(id, data, {new:true}, (err, item) => {
        if(err || !item)
            return errorHandler(item, next, err);
        return res.json({
            data: item
        });
    });
}

module.exports = {
    productoById,
    listar,
    getProducto,
    guardar,
    borrar,
    actualizar
}