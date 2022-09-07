
const chambreRouter = require('express').Router();

const chambreValidator = require('../validateur/chambre-validator.js')

chambreRouter.route('/')
.get ((req,res) => {
    res.status(200).send("Bienvenue sur la page des chambre d'hotels !")
})

chambreRouter.route('/reservation')
    .get((req,res) => {
        res.status(200).send("Bienvenue sur la page de réservation !")
    })

module.exports = chambreRouter;