/* Crear el ruteador */
const express = require('express');
const router = express.Router();

const autos = require('../db/index')

/* crear los sufijos */
router.get('/', (req, res) => {
    return  res.send(autos.lista);
});


/* crear los sufijos */
router.get('/filtrarPorMarca/:marca/:annio?', (req, res) => {
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
        return res.send(autosEncontrados);
    }
});

/* Exportar ruteador */
module.exports = router;