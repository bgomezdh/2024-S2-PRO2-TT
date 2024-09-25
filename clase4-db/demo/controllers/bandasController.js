const bandas = require("../db/bandas")

const bandasController = {
    index:function(req, res) {
       return res.render('index', {miLista: bandas.lista});
      },
      detalle:function(req, res) {
        const id = req.params.id;
        let bandaEncontrada = {}
        for (let index = 0; index < bandas.lista.length; index++) {
            if (bandas.lista[index].id == id) {
                bandaEncontrada = bandas.lista[index];
            }
            
        }
        return res.render('detalle', {banda: bandaEncontrada});
       },
       genero:function(req, res) {
        return res.render('genero');
       }

}



module.exports = bandasController;