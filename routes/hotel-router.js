const hotelRouter = require ('express').Router();
const hotelController = require("../controlers/hotel-controller.js")

const hotelValidator = require("../validateur/hotel-validator")

hotelRouter.route('/')
    .get(hotelController.getAll)




module.exports = hotelRouter;