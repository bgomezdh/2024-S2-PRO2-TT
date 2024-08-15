var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('devuelve todos los usuarios registrados');
});

router.get('/nombre/:nombre', function(req, res) {
  let nombreCapturado = req.params.nombre;
  return res.send("Hola, " + nombreCapturado);
})



module.exports = router;
