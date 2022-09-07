const{Schema,model}=require('mongoose');

//Création d'un schema par défaut

const userSchema=new Schema({
    firstname:{
        type:String,
        require:true,
        trim:true
    },
    lastname:{
        type:String,
        require:true,
        trim:true},
    email:{
        type:String,
        require:true,
        trim:true
    },
    password:{
        type:String,
        require:true
    },
    pays:{
        type:String,
        require:true,
        trim:true

    },
    telephone:{
        type:Number,
        require:true,
        trim:true
    },
    role:{
        type:String,
        enum:["User","Admin"],
        require:true,
        default:'User'
    }
},{
    collection:"User",
    timestamps:true
});
//model User à partir du userSchema
const User=model('User',userSchema);

module.exports=User;