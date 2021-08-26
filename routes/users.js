var express = require('express');
var router = express.Router();

/* Middleware y validaciones */
var loginvalidator = require('../validation/loginValidator');
var upload = require('../middlewares/multermiddleware');

/* Controlador usuario */
var usersController = require('../controllers/usersController');

/* Ruteo */
router.get('/login', usersController.login);
router.post('/login',loginvalidator, usersController.processlogin);
router.get('/register', usersController.register)
router.post('/register', upload.single('avatar'), usersController.processRegister);

module.exports = router;
