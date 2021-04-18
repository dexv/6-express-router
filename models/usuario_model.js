var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schemaUsuario = new Schema({
  	nombre: {
		type: String,
		required: true
  	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	role: {
		type: String,
		default: 'USER_ROLE',
	},
	disponible: {
		type: Boolean,
		default: true
	},
	cart: {
		items: [{
		productId: {
			type: Schema.Types.ObjectId,
			ref: 'modelProducto'
		},
		cantidad: {
			type: Number,
			required: true
		},
		total: {
			type: Number,
			required: true
		}
		}]
	}
});

schemaUsuario.methods.addCarro = function(docProducto){
	let index = this.cart.items.findIndex(item => {
    	return item.productId.toString() == docProducto._id.toString()
  	});
	let _cantidad = 1;
	let newCartItems = [...this.cart.items];

	if(index>=0){
		_cantidad=this.cart.items[index].cantidad+1;
		newCartItems[index].cantidad=_cantidad;
		newCartItems[index].total=_cantidad * docProducto.precio;
	}
	else{
		newCartItems.push({
			productId: docProducto._id,
			cantidad: _cantidad,
			total: docProducto.precio
		})
	}
	
	this.cart.items = newCartItems;
	return this.save();
}

schemaUsuario.methods.removeCarrito = function(docProducto){
	let index = this.cart.items.findIndex(item => {
    	return item.productId.toString() == docProducto._id.toString()
  	});
	let _cantidad = 1;
	let newCartItems = [...this.cart.items];

	if(index>=0){
		let cantidad_producto=this.cart.items[index].cantidad;
		if(cantidad_producto>1){
			_cantidad=cantidad_producto-1;
			newCartItems[index].cantidad=_cantidad;
			newCartItems[index].total=_cantidad * docProducto.precio;
		}
		else
		{
			delete newCartItems[index];
		}
	}
	
	this.cart.items = newCartItems;
	return this.save();
}

schemaUsuario.methods.clearCarrito = function(){
	this.cart = { items: [] };
	return this.save();
}

const model = mongoose.model('modelUsuario', schemaUsuario);
module.exports = model;