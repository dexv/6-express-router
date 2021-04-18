const express = require('express');
const { listar, guardar, imagen, borrar, actualizar, getProducto, productoById } = require('../../controller/producto_controller');
const router = express.Router();

router.param('id', productoById);

router.get('/producto', listar);
router.get('/producto/:id', getProducto);
router.get('/producto/imagen/:id', imagen);
router.post('/producto', guardar);
router.delete('/producto/:id', borrar);
router.put('/producto/:id', actualizar);

module.exports = router;