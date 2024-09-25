var express = require('express');
var router = express.Router();

let bandasController = require("../controllers/bandasControlador");

router.get("/", bandasController.index);
router.get("/id/:id", bandasController.id );
router.get("/genero/:genero", bandasController.genero);

module.exports = router;