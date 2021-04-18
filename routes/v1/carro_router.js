const express = require('express');
const { addCarro, removeCarrito, listarCarro, limpiarCarro } = require('../../controller/carro_controller');
const router = express.Router();

router.post('/carro', addCarro);
router.delete('/carro', removeCarrito);
router.get('/carro/:id', listarCarro);
router.delete('/carro/:id', limpiarCarro);

module.exports = router;