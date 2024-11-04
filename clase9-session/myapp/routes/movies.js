var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const movieController = require('../controllers/movieController');

/* GET home page. */
router.get('/', movieController.index);

/* GET details movie page. */
router.get('/id/:idPelicula', movieController.detalle);

/* GET Creat movie page. */
router.get('/register', movieController.showFormCreate);

/* POST Creat movie page. */
router.post('/register', movieController.saveFormCreate);

/* GET Creat movie page. */
router.get('/busqueda', movieController.search);

/* GET Update movie page. */
router.get('/update/:idPelicula', movieController.showFormUpdate);

/* POST Update movie page. */
router.post('/update', movieController.saveFormUpdate);

module.exports = router;