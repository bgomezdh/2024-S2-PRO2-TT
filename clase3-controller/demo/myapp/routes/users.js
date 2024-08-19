var express = require('express');
var router = express.Router();
/* requerimos el controller del recurso */
const usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', usersController.index);

router.get('/nombre/:nombre', usersController.saludarPorNombre)

module.exports = router;
