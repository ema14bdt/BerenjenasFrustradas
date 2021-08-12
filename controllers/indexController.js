const path =require('path');
const {validationResults} = require('express-validator');

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
        const errors = validationResults(req);
        if(errors.isEmpty())
        var login = [
            {email:req.body.email,
            contrasenia: req.body.contrasenia
        }
        ]
        console.log(login);
        res.redirect('/');

    }
}