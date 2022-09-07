const userController = require("../controlers/user-controller")

const bodyValidation = require("../middlewares/bolyValidators");
const userValidateur = require("../validateur/user-validator.js");

const userRouter = require('express').Router();


userRouter.route('/')
    
    .get(userController.getAll) // GetAll User avec la méthode GET
    
    

userRouter.route('/:id')
    .get(userController.getByID) //GetById

    .put( bodyValidation(userValidateur), userController.update)

    .delete(userController.delete)


// userRouter.route('/login')
// .get ((req,res) => {
//     res.send("Veuillez vous logger ");
// })



module.exports = userRouter;