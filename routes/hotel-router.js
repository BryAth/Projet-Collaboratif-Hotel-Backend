const hotelRouter = require ('express').Router();

const hotelValidator = require("../validateur/hotel-validator")

hotelRouter.route('/')
    .get((req,res) => {
        res.send("Bienvenue sur la page d'hotels !")
    })

hotelRouter.route('/reservation')
    .get((req,res) => {
        res.send("Bienvenue sur la page de réservation !")
    })


module.exports = hotelRouter;