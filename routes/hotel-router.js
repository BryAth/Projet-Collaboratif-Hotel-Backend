const hotelRouter = require ('express').Router();

hotelRouter.route('/')
    .get((req,res) => {
        res.send("Bienvenue sur la page d'hotels !")
    })

hotelRouter.route('/reservation')
    .get((req,res) => {
        res.send("Bienvenue sur la page de réservation !")
    })


module.exports = hotelRouter;