const express= require('express')
const { loginController, registerController } = require('../controllers/userController')

//const object
const router = express.Router()


//routers
//POST || LOGIN
router.post('/login',loginController, registerController)


//POST || REGISTER USER

router.post('/register',)
module.exports= router
