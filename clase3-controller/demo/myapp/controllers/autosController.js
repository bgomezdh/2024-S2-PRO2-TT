const autos = require('../db/index')

const autosController = {
    index: (req, res) => {
        /*                              K                   K                */
        return res.render('autos', {texto: "Mis autos", listado: autos.lista})
    },
    filtrarMarca: (req, res) => {
        let marcaBuscada = req.params.marca;
        let annioBuscado = req.params.annio;
        let autosEncontrados = [];
    
        for (let i = 0; i < autos.lista.length; i++) {
            if (autos.lista[i].marca == marcaBuscada) {
                autosEncontrados.push(autos.lista[i])
            }
        }
    
        if (autosEncontrados.length == 0) {
            return res.send("No hay autos de la marca buscada")
        }else {
            return res.render('autos', {
                texto: "Autos filtrados por marca: " + marcaBuscada, 
                listado: autosEncontrados
            })
            return res.send(autosEncontrados);
        }
    }
}

module.exports = autosController;