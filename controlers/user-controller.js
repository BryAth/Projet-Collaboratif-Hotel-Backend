const UserDTO=require("../dto/user-dto");
const User = require("../models/user-model");

//Fonction de mappage 

const userMapper=(user)=>new UserDTO(user.id,user.email,user.firstname,user.lastname,user.contry,user.phone);

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
    update:async(req,res)=>{
        const id=req.params.id;

        const {firstname,lastname,email,contry,phone}=req.body
        //la fonction qui permet de trouver l'élément via son id et de le modifier
        const userUpdated=await User.findByIdAndUpdate(id,{firstname,lastname,email,phone,contry},{returnDocument:'after'});

        if (!userUpdated) {
            return res.sendStatus(404) // <------ élément pas trouvée lors de la demande
        }
       // notre userUpdated qui contient password + role 
       // notre  userDTO qui ne les contient pas
        const userDTO=userMapper(userUpdated);

        res.status(200).json(userDTO);
    },
    delete:async(req,res)=>{
        const id = req.params.id;
        const userToDelete=await User.findByIdAndDelete(id);
        if (!userToDelete) {
            return res.sendStatus(404)// <------ élément pas trouvée lors de la demande
        }
        res.sendStatus(204)// tout a fonctionnée
    },
}
module.exports=userController;