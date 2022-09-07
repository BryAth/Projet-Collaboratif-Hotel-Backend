const hotelRouter = require ('express').Router();

const hotelValidator = require("../validateur/hotel-validator")

hotelRouter.route('/')
    .get((req,res) => {
        res.status(200).send("Bienvenue sur la page d'hotels !")
    })




module.exports = hotelRouter;