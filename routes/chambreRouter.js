
const chambreRouter = require('express').Router();


const chambreController = require('../controlers/chambre-controller.js');


chambreRouter.route('/')

.get (chambreController.getAll)



.post(chambreController.create)

chambreRouter.route('/:id')

.get(chambreController.getById)

.put(chambreController.reservation)

.put(chambreController.desactive)

.delete(chambreController.delete)


    

module.exports = chambreRouter;