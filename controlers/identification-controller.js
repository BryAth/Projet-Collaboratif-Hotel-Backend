const User=require('../models/user-model');

//ici token si besoin

const argon2=require('argon2');

const identificationController={
    login: async(req,res)=>{
    //Pour se loger un identifiant et un mdp 

    const {credential,password}=req.body
    //req.body va contenir un objet qui ressemble à ceci :
        // {
        //  "credential" : "monIdentifiant"; 
        //  "password" : "monPassword"
        // }
    },
    register:async(req,res)=>{}
};

module.exports=identificationController;
