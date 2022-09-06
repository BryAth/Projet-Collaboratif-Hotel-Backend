const yup=require('yup');

const userValidateur=yup.object({
    firstname:yup.string().trim().required().min(2).max(110),
    lastname:yup.string().trim().required().min(2).max(100),
    email:yup.string().trim().required().max(255),
    pays:yup.string().trim().required().max(50),
    telphone:yup.string().trim().required().max(15),
});

module.exports=userValidateur;