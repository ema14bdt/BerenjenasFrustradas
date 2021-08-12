const {body, check} = require('express-validator'); 

module.exports = [
    check('email').isEmpty().isEmail().withMessage('completar con un Email'),
    check('contrasenia').isLength({min:8}).withMessage('ingrese una contraseña mayor a 8 caracteres')
]


