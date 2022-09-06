const UserDTO=require("../dto/user-dto");
const User = require("../models/user-model");

//Fonction de mappage 

const userMapper=(user)=>new UserDTO(user.id,user.email,user.firstname,user.lastname);

const userController={
    getAll:async(req,res)=>{
        // récupéré les utilisateurs
        const users=await User.find();
        const userDTO = users.map(userMapper);
        res.status(200).json(userDTO);
    },
    getByID:async(req,res)=>{
        
        const id=req.params.id;

        const user=await User.findById(id);
        
        if (!user) {
            return res.sendStatus(404) // <------ élément pas trouvée lors de la demande
        }
        const userDTO=userMapper(user);

        res.status(200).json(userDTO);
    },
    update:async(req,res)=>{},
    delete:async(req,res)=>{},
}
module.exports=userController;