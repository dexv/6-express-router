const ModelCategoria = require('../models/categoria_model');

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
    ModelCategoria.find().exec((err, item) => {
        if(err || !item)
            return errorHandler(item, next, err);
        return res.json({
            data: item
        });
    });
}

function getCategoria(req, res, next){
    let id = req.params.id;
    ModelCategoria.findById(id, (err, item) => {
        if(err || !item)
            return errorHandler(item, next, err);
        return res.json({
            data: item
        });
    });
}

function guardar(req, res, next){
    let data = {
        categoria_nombre: req.body.categoria_nombre
    }

    modelCategoria = new ModelCategoria(data);
    modelCategoria.save((err, item) => {
        if(err || !item)
            return errorHandler(item, next, err);
        return res.json({
            message: item
        })
    });
}

function borrar(req, res, next){
    let id = req.params.id;
    ModelCategoria.findByIdAndRemove(id, (err, item) => {
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
        categoria_nombre: req.body.categoria_nombre
    }
    ModelCategoria.findByIdAndUpdate(id, data, {new:true}, (err, item) => {
        if(err || !item)
            return errorHandler(item, next, err);
        return res.json({
            data: item
        });
    });
}

module.exports = {
    listar,
    getCategoria,
    guardar,
    borrar,
    actualizar
}