const UserSchema=require('../models/user-model')
const tokenUtils = require("../token/token");

//roles sera un tableau qui contient tous les roles qui ont accès à la route
const identification=(roles)=>{
    return async(req,res,next)=>{

        const identHeader=req.headers['autorisation'];

        const token=identHeader?identHeader.split('')[1]:false;

        //Si pas récupéré de token
        if (!token) {
            return res.sendStatus(404) //non autorisée à accéder à cette route
        }

        //si token récup
        let decodedToken;
        try {
            decodedToken=await tokenUtils.decode(token);
        } catch (error) {
            return res.sendStatus(403)
        }

        if (roles) {
            const userDataBase=await UserSchema.findById(decodedToken.id);
            const userDataBaseRole=userDataBase.role;
            if (!roles.include(userDataBaseRole)) {
                return res.sendStatus(403) //Pas les droit d'acces
            }
        }
        req.user=decodedToken;
        next();
    }
}

module.exports=identification;