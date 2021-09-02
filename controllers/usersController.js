const path =require('path');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const {users_db, guardarUser} = require('../data/users');
const db = require('../database/models')
const {products_db} = require('../data/productDB')
const { push } = require('../validation/loginValidator');

module.exports = {
    login: (req,res) => {
        res.render('login', {
            title:'Login'

        })
    },
    processlogin: (req,res) => {
        const errors = validationResult(req);
       
        if(errors.isEmpty()){
           let usuario = users_db.find(usuario => {
               usuario.email === req.body.email
           })
           req.session.usuarios = {
               id: usuario.id,
               name: usuario.nombre,
               email: req.body.email,
               rol: usuario.rol,
               image: usuario.image,
            }
            res.cookie('Berenjas', req.session.login,{maxAge: 1000 * 60})
        console.log(res.cookie);
        res.redirect('/');
        }else{
            res.render('login', {errores: errors.mapped(), title: 'Login'})
            console.log(errores)
        } //renderizar el login de nuevo en caso de errores
    },
    register: (req, res) => {
        res.render('register', {
            title: 'Register'
        })
    },
    processRegister: (req,res) => {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            db.users.create({
                name: req.body.nombre,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.contrasenia, 10),
                rol: 'user',
                avatar: req.file.filename
            })
            .then(result => {
                console.log('¡Se registró exitosamente!');
                return res.redirect('/login')
            })
            .catch(notResult => {
                console.log('NO se registró exitosamente');
                return res.redirect('/register')
            })
        } 
    }
}