const userController = require("../controlers/user-controller")

const bodyValidation = require("../middlewares/bolyValidators");
const idValidator = require("../middlewares/idValidator");
const userValidateur = require("../validateur/user-validator.js");

const userRouter = require('express').Router();


userRouter.route('/')
    
    .get(  idValidator(), userController.getAll) // GetAll User avec la méthode GET
    
    

userRouter.route('/:id')
    .get( idValidator(),userController.getByID) //GetById

    .put( bodyValidation(userValidateur), userController.update)

    .delete( idValidator(),userController.delete)





module.exports = userRouter;