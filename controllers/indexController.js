const path =require('path');
const {validationResult} = require('express-validator');

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
    }
}