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

function singUp(req, res, next){
    console.log(req.body);
    let data = {
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password
    }

    let modelUsuario = new ModelUsuario(data);
    modelUsuario.save((err, item) => {
        if(err || !item)
            return errorHandler(item, next, err);
        return res.json({
            message: item
        })
    });
}


module.exports = {
    singUp
}