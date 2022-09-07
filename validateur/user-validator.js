const yup=require('yup');

const userValidateur=yup.object({
    pseudo : yup.string().trim().required().min(3).max(50),
    firstname:yup.string().trim().required().min(2).max(110),
    lastname:yup.string().trim().required().min(2).max(100),
    email:yup.string().trim().required().max(255),
    contry:yup.string().trim().required().max(50),
    phone:yup.string().trim().required().max(15),
});

module.exports=userValidateur;