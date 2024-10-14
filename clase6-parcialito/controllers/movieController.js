const db = require('../database/models');

const indexController = {
  index: function (req, res) {

      db.Movie.findAll()
      .then((results) => {
        return res.send(results)
        return res.render("movies", {listaPeliculas: results })
      })
      .catch((err) => {
        return console.log(err);
      });
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
