const userController = require("../controlers/user-controller")


const userRouter = require('express').Router();


userRouter.route('/')
    
    .get(userController.getAll);
    

userRouter.route('/:id')
    .get(userController.getByID)

    .put(userController.update);


userRouter.route('/login')
.get ((req,res) => {
    res.send("Veuillez vous logger ");
})



module.exports = userRouter;