const express = require('express');
const { listar, guardar, borrar, actualizar, getProducto } = require('../controller/producto_controller');
const router = express.Router();

router.get('/producto', listar);
router.get('/producto/:id', getProducto);
router.post('/producto', guardar);
router.delete('/producto/:id', borrar);
router.put('/producto/:id', actualizar);

module.exports = router;