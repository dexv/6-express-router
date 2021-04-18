const ModelCategoria = require('./categoria_model');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//forma 1 de validar
const validar_categoria = async(val) => {
	return await ModelCategoria.exists({
		categoria_nombre: val
	});
}

var schemaProducto = new Schema({
	producto_nombre: {
		type: String,
		required: true
	},
	descripcion: {
		type: String
	},
	precio: {
		type: Number,
		required: true
	},
	stock: {
		type: Number,
		required: 'Stock requerido'
	},
	vendidos: {
		type: Number,
		default: 0
	},
	disponible: {
		type: Boolean,
		default: true
	},
	categoria_nombre: {
		type: String,
		required: true,
		validate: {
			validator: validar_categoria,
			message: "Categoria no existe"
		}
	},
	imagen: {
		data: Buffer,
		contentType: String 
	}
	}, {
	timestamps: true
});

//forma 2 de validar
// schemaProducto.path('categoria_nombre').validate(
// 	{
// 		validator: validar_categoria,
// 		message: "Categoria no existe v2"
// 	}
// );

const model = mongoose.model('modelProducto', schemaProducto);
module.exports = model;