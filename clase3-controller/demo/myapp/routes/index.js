var express = require('express');
var router = express.Router();

/* requerir controller del recurso */
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index);

module.exports = router;
