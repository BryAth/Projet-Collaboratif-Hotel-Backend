const userController = require("../controlers/user-controller")

const bodyValidation = require("../middlewares/bolyValidators");
const userValidateur = require("../validateur/user-validator.js");

const userRouter = require('express').Router();


userRouter.route('/')
    
    .get(userController.getAll)
    .post((req,res) => {
        res.send("salut")
    })
    

userRouter.route('/:id')
    .get(userController.getByID)

    .put( bodyValidation(userValidateur), userController.update);


userRouter.route('/login')
.get ((req,res) => {
    res.send("Veuillez vous logger ");
})



module.exports = userRouter;