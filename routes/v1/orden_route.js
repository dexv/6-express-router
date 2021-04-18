const express = require('express');
const { generarOrden  } = require('../../controller/orden_controler');
const router = express.Router();

router.get('/orden/generar/:id', generarOrden);

module.exports = router;