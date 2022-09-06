
const chambreRouter = require('express').Router();


chambreRouter.route('/')
.get ((req,res) => {
    res.send("Bienvenue sur la page des chambre d'hotels !")
})

module.exports = chambreRouter;