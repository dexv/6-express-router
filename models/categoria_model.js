var mongoose = require('mongoose');

var schemaCategoria = new mongoose.Schema({
    categoria_nombre: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const model = mongoose.model('ModelCategoria', schemaCategoria);

module.exports = model;