var express = require('express');
var router = express.Router();
const bandasController = require("../controllers/bandasController");

/* GET users listing. */
router.get('/', bandasController.index);
router.get('/id/:id', bandasController.detalle);
router.get('/genero/:genero', bandasController.genero);

module.exports = router;