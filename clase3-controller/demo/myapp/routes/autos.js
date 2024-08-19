/* Crear el ruteador */
const express = require('express');
const router = express.Router();

const autosController = require('../controllers/autosController')

/* crear los sufijos */
router.get('/', autosController.index);


/* crear los sufijos */
router.get('/filtrarPorMarca/:marca/:annio?', autosController.filtrarMarca);

/* Exportar ruteador */
module.exports = router;