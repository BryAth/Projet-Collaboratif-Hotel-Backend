const adminRouter = require ('express').Router();




adminRouter.route('/')
    .get((req,res) => {
        res.send("Bienvenue maitre ! ")
    })

module.exports = adminRouter;