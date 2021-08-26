const path =require('path');

/* Requiero la base de datos de productos */
const products = require('../data/productDB')

const {validationResult} = require('express-validator');



module.exports = {
    home : (req,res) => {
        res.render('home', {
            title:'Inicio',
            products: products.products_db
        })
        console.log(products)
    },


}