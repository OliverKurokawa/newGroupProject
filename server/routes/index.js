var express = require('express');
var router = express.Router();
let indexController = require('../controllers/index');


/* GET home page. */
router.get('/',indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/register',indexController.displayRegisterPage);
router.post('/register',indexController.processRegisterPage);

router.get('/login',indexController.displayLoginPage);
router.post('/login',indexController.processLoginPage);

router.get('/logout',indexController.performLogout);



module.exports = router;
