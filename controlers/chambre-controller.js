const Chambre = require('../models/chambre-model')



const chambreController = {
    getAll : async(req,res)=>{
        console.log(req.query)
        const offset = req.query.offset ? req.query.offset : 0;
        const limit = req.query.offset ? req.query.offset : 10;
        const chambres = await Chambre.find().limit(limit).skip(offset);
        const count = await Chambre.countDocuments();
        const data = {'chambres':chambres,'count':count}
        res.status(200).json(data)
    },
    getById: async(req,res) =>{
        const id =req.params.id;
        const chambre = await Chambre.findById(id);

        if(chambre){
            res.status(200).json(chambre);
        }
        else{
            return res.sendStatus(404);
        }
    },
    create: async(req,res)=>{
        const chambreToAdd = Chambre(req.body);

        await chambreToAdd.save();
        res.status(200).json(chambreToAdd);
    },
    update: async(req,res) =>{
        const id = req.params.id;
        const chambre = await Chambre.findByIdAndUpdate(id,{
            nom,
            descriptionCourte,
            descriptionLongue,
            hotel,
            type,
            nombreDePersonnes,
            prix,
            salleDeBain,
            nombreDeWc,
            options


        },{returnDocument:'after'});
        if(chambre){
            res.status(200).json(chambre);
        }
        else{
            return res.sendStatus(404);
        }
    },
    desactive:async(req,res)=>{
        const id = req.params.id;
        const chambre = await Chambre.findByIdAndUpdate(id,{
            chambrestatus
        },{returnDocument:'after'});
        if(chambre){
            res.status(200).json(chambre);
        }
        else{
            return res.sendStatus(404);
        }

    },
    reservation:async(req,res)=>{
        const id = req.params.id;
        const{dateDebut,dateFin}=req.body;
        const chambreReservationUpdated= await Commande.findByIdAndUpdate(id,{
            dateDebut,
            dateFin : dateFin? dateFin:dateDebut
        },{returnDocument:'after'});
        if(!chambreReservationUpdated){
            return res.sendStatus(404);
        }
        res.sendStatus(204);
    },

    delete: async(req,res) =>{
        const id = req.params.id;
        const chambreToDelete = await Chambre.findByIdAndDelete(id);
        if(chambreToDelete){
            res.sendStatus(204)
        }
        else{
            return res.sendStatus(404);
        }
    }
}


module.exports = chambreController;