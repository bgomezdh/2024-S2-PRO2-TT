const db = require('../db/data');


const indexController = {
  index: function (req, res) {
      return res.render("movies", {listaPeliculas: db.movies})
  },
  detalle: function (req, res) {
    let id = req.params.idPelicula;

    let peliculaEncontrada = {};
    
    /* completar método para buscar la pelicula por parametro*/
    
    for (let i = 0; i < db.movies.length; i++) {
     if (id == db.movies[i].id) {
        peliculaEncontrada = db.movies[i];
     }
    }

 
    return res.render("detalleMovies", {movie: peliculaEncontrada})
  },
  showFormCreate: function (req, res) {
    return res.render("registerMovie");
  }

};

module.exports = indexController;
