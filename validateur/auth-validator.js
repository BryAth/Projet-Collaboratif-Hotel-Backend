const yup=require('yup')

const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_]).+$/;
// contient au moins un chiffre, une lettre minuscule, une lettre majuscule et un caractère spécial

const registerValid=yup.object({
    pseudo : yup.string().trim().required().min(3).max(50),
    firstname:yup.string().trim().required().min(2).max(110),
    lastname:yup.string().trim().required().min(2).max(100),
    email:yup.string().trim().required().max(255),
    pays:yup.string().trim().required().max(50),
    telphone:yup.string().trim().required().max(15),
});
const logValidator=yup.object({
    credential : yup.string().trim().required().max(255),
    password : yup.string().required()
});

module.exports={registerValid,logValidator}