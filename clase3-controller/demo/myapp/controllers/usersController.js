const usersController = {
    index: function(req, res) {
        res.send('devuelve todos los usuarios registrados');
      },
    saludarPorNombre: function(req, res) {
        let nombreCapturado = req.params.nombre;
        return res.send("Hola, " + nombreCapturado);
      }
}

module.exports = usersController;