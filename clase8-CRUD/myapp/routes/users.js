var express = require('express');
var router = express.Router();

/* requerir el modelo del controlador */
const userController = require('../controllers/userController');

/* crear sufijos Registro*/
router.get('/register', userController.register)

/* crear sufijos Login*/
router.get('/login', userController.login);

/* procesar sufijos Login*/
router.post('/login', userController.loginUser)

/* result prueba - GET*/
router.get('/register', userController.results)

/* result prueba - POST*/
router.post('/register', userController.results)


module.exports = router;
