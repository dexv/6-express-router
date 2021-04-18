const express = require('express');
const { singUp } = require('../../controller/login_controller');
const router = express.Router();

router.post('/singup', singUp);

module.exports = router;