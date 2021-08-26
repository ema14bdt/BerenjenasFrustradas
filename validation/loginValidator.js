const {body, check} = require('express-validator');
const {users_db} = require('../data/users');
const bcrypt = require('bcryptjs')


module.exports = [
    check('email').isEmpty().isEmail().withMessage('completar con un Email'),
    check('contrasenia').isLength({min:6}).withMessage('ingrese una contraseña mayor a 6 caracteres'),

    body('email')
    .custom((value,{req}) => {
        let usuario = users_db.find(usuario => usuario.email === value && bcrypt.compareSync(req.body.contrasenia,usuario.contrasenia));
        if (usuario){
            return true
        }else{
            return false
        }
    }).withMessage('credenciales inválidas')
]


