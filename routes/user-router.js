const userRouter = require('express').Router();


userRouter.route('/')
    .get ((req,res) => {
    res.send("Veuillez vous connecter !")

}) 

userRouter.route('/login', (req,res) => {
    res.send("Veuillez vous logger ")
})



module.exports = userRouter;