const {Schema, model} = require('mongoose');

const chambreSchema = new Schema ({
    nom : {
        type : string,
        required : true,
        trim:true,
    },
    descriptionCourte:{
        type : string,
        required : true,
        trim : true
    },
    descriptionLongue : {
        type : string,
        required : true,
        trim : true
    },
    hotel : {
        type : string,
        required : true,
        trim : true,
    },
    type : {
        type : string,
        required : true,
        trim : true
    },
    nombreDePersonnes:{
        type:Number,
        required:true,
    },
    prix:{
        type:Number,
        required:true,
    },
    salleDeBain : {
        type:Number,
        required:true,
    },
    nombreDeWc : {
        type:Number,
        required : true ,
    },
    options : {
        balcon: {type : Boolean},
        airConditione : {type : Boolean},
        wifi : {type : Boolean},
        minibar : {type : Boolean},
        animaux : {type : Boolean},
        tv : {type : Boolean},
        dejeuner : {type : Boolean},
        disponible : {type : Boolean}

    }


},{
    collection : 'Chambre',
}
);

const Chambre = model('Chambre', chambreSchema);
module.exports = Chambre;