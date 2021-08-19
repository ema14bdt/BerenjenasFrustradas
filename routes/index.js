var express = require('express');
var router = express.Router();
var mainController =require('../controllers/indexController');
var loginvalidator = require('../validation/loginValidator');
var upload = require('../middlewares/multermiddleware');
/* GET home page. */
router.get('/', mainController.home);
router.get('/login', mainController.login);
router.post('/login',loginvalidator, mainController.processlogin);
router.get('/register', mainController.register)
router.post('/register', upload.single('avatar'), mainController.processRegister);


module.exports = router;
