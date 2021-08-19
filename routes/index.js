var express = require('express');
var router = express.Router();
const mainController =require('../controllers/indexController');
var loginvalidator = require('../validation/loginValidator')
/* GET home page. */
router.get('/', mainController.home);
router.get('/login', mainController.login);
router.post('/login', mainController.processlogin);
router.get('/register', mainController.register)

module.exports = router;
