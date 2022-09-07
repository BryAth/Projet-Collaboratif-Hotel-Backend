const Hotel = require('../models/hotel-model')


const hotelController = {
    getAll : async(req,res)=>{
        console.log(req.query)
        const offset = req.query.offset ? req.query.offset : 0;
        const limit = req.query.offset ? req.query.offset : 10;
        const hotels = await Hotel.find().limit(limit).skip(offset);
        const count = await Hotel.countDocuments();
        const data = {'hotels':hotels,'count':count}
        res.status(200).json(data)
    },
    getById: async(req,res) =>{
        const id =req.params.id;
        const hotel = await Hotel.findById(id);

        if(hotel){
            res.status(200).json(hotel);
        }
        else{
            return res.sendStatus(404);
        }
    },
    create: async(req,res)=>{
        const hotelToAdd = Hotel(req.body);
        
        await hotelToAdd.save();
        res.status(200).json(hotelToAdd);
    },
    update: async(req,res) =>{
        const id = req.params.id;
        const {nom,etoiles,adresse,telephone,email,nombreChambres,piscine,voiturier,roomService} = req.body
        const hotel = await Hotel.findByIdAndUpdate(id,{
        nom,
        etoiles,
        adresse,
        telephone,
        email,
        nombreChambres,
        piscine, 
        voiturier,
        roomService

        },{returnDocument:'after'});
        if(hotel){
            res.status(200).json(hotel);
        }
        else{
            return res.sendStatus(404);
        }
    },
    delete: async(req,res) =>{
        const id = req.params.id;
        const hotelToDelete = await Hotel.findByIdAndDelete(id);
        if(hotelToDelete){
            res.sendStatus(204)
        }
        else{
            return res.sendStatus(404);
        }
    }
}


module.exports = hotelController;