const path =require('path');
const {validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const {users_db, guardarUser} = require('../data/users');
const { push } = require('../validation/loginValidator');

module.exports = {
    home : (req,res) => {
        res.render('home', {title:'Inicio'})
        
    },
    login: (req,res) => {
        res.render('login', {
            title:'login'

        })
    },
    processlogin: (req,res) => {
        const errors = validationResult(req);
       
        if(errors.isEmpty()){
           let usuario = users_db.find(usuario => {
               usuario.email === req.body.email
           })
           req.session.usuario = {
               id: usuario.id,
               name: usuario.nombre
               
           }
        
        var login = [
            {email:req.body.email,
            contrasenia: req.body.contrasenia
        }
        ]
        console.log(login);
        res.redirect('/');
        }else{
            res.render('login', {errors:errors.mapped()})
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

        
        var register = 
            {name: req.body.nombre,
            email:req.body.email,
            contrasenia: bcrypt.hashSync(req.body.contrasenia, 10),
            avatar: req.file.filename,
            id: users_db.length > 0 ? users_db[users_db.length - 1].id + 1 : 1,

        }
          users_db.push(register)  
          guardarUser(users_db)
        
        console.log(register);
        res.redirect('/login');
        }else{
            res.render('register', {errors:errors.mapped()})
        }
        
    }

}