
const chambreRouter = require('express').Router();

const chambreValidator = require('../validateur/chambre-validator.js')

chambreRouter.route('/')
.get ((req,res) => {
    res.send("Bienvenue sur la page des chambre d'hotels !")
})

module.exports = chambreRouter;