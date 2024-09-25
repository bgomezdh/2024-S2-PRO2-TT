let bandas = require('../data/db');

let bandasController = {
    index: function(req, res) {
        return res.render("bandas", {bandas: bandas.lista})
    },
    id: function(req, res){
        let idAgarro = req.params.id;
        let banda = null;
        for (let i = 0; i < bandas.lista.length; i++) {
            if (bandas.lista[i].id==idAgarro) {
                 banda= bandas.lista[i];
            }
        }
       
        return res.render("detalle", {banda: banda})
    
    },
    genero: function(req, res){
        let generoAgarro = req.params.genero;
        return res.send(generoAgarro);
    }
};

module.exports = bandasController;