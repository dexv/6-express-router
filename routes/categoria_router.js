const express = require('express');
const { listar, guardar, borrar, actualizar, getCategoria } = require('../controller/categoria_controller');
const router = express.Router();

router.get('/categoria', listar);
router.get('/categoria/:id', getCategoria);
router.post('/categoria', guardar);
router.delete('/categoria/:id', borrar);
router.put('/categoria/:id', actualizar);

module.exports = router;