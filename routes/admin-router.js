const adminRouter = require ('express').Router();




adminRouter.route('/')
    .get((req,res) => {
        res.status(200).send("Bienvenue maitre ! ")
    })

module.exports = adminRouter;