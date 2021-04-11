var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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
    required: true
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
    required: true
  },
  imagen: {
    data: Buffer,
    contentType: String 
  }
}, {
  timestamps: true
});

const model = mongoose.model('modelProducto', schemaProducto);

module.exports = model;