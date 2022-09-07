
const chambreRouter = require('express').Router();


const chambreController = require('../controlers/chambre-controller.js');


chambreRouter.route('/')

.get (chambreController.getAll)

.post(chambreController.create)

chambreRouter.route('/:id')



    

module.exports = chambreRouter;