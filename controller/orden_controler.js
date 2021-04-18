const ModelOrden = require('../models/orden_model');
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

const generarOrden = async (req, res, next) => {
    let idUsuario = req.params.id;
    try {
        let docUsuario = await ModelUsuario.findById(idUsuario).exec();
        let data = {
            usuario: {
                nombre: docUsuario.nombre,
                email: docUsuario.email,
                userId: docUsuario._id
            }
        }
    
        let docOrden = await new ModelOrden(data);
        docOrden.generarOrden(docUsuario);
        res.json(docOrden);
    } 
    catch (error) {
        next(error);    
    }
}

module.exports = {
    generarOrden
}