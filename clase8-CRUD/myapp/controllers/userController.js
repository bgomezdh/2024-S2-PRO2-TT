const db = require('../database/models');
const bcryptjs = require('bcryptjs');

const userController = {
    register: (req, res)=>{
        return res.render("registerUser")
    },
    login: (req, res)=>{
        return res.render("login")
    },
    loginUser: (req, res) => {
        let form = req.body;

        let filtro = {
            where:{
                email: form.email
            }
        }

        db.User.findOne(filtro)
        .then((result) => {

            if (result != undefined) {

                let validarClave = bcryptjs.compareSync( form.password , result.password);
                
                if (validarClave) {
                    return res.redirect("/");
                } else {
                    return res.send("Clave incorrecta");
                }

            } else {
                return res.send("No se encontro un usuarios");
            }
        }).catch((err) => {
            return console.log(err);
            
        });

    },
    results: (req, res) => {
        /* let qs = req.query.email; */

        let form = req.body;
        let pass = bcryptjs.hashSync(form.password, 10);

        form.password = pass;
       
        db.User.create(form)
        .then((result) => {
            return res.redirect("/users/login")
        }).catch((err) => {
            return console.log(err);
        });
    }
}

module.exports = userController;