const UserDTO=require("../dto/user-dto");
const User = require("../models/user-model");

//Fonction de mappage 

const userMapper=(user)=>new UserDTO(user.pseudo,user.email,user.firstname,user.lastname);

const userController={
    getAll:async(req,res)=>{
        // récupéré les utilisateurs
        const users=await User.find();
        
        res.status(200).json(users);
    },
    getByID:async(req,res)=>{
        
        const id=req.params.id;

        const user=await User.findById(id);
        
        if (!user) {
            return res.sendStatus(404) // <------ élément pas trouvée lors de la demande
        }

        const userDTO=userMapper(user);

        res.status(200).json(user);
    },
    create : async(req,res) => {
        const userToAdd = User(req.body)
        await userToAdd.save()
        res.status(200).json(userToAdd)
    },
    update:async(req,res)=>{
        const id=req.params.id;

        const {firstname,lastname,email,pays,telephone}=req.body
        //la fonction qui permet de trouver l'élément via son id et de le modifier
        const userUpdated=await User.findByIdAndUpdate(id,{firstname,lastname,email,telephone},{returnDocument:'after'});

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