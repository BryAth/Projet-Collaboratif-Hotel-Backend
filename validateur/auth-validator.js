const yup=require('yup')

const pwdRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W|_]).+$/;
// contient au moins un chiffre, une lettre minuscule, une lettre majuscule et un caractère spécial

const registerValid=yup.object({
    pseudo : yup.string().trim().required().min(3).max(50),
    firstname:yup.string().trim().required().min(2).max(110),
    lastname:yup.string().trim().required().min(2).max(100),
    email:yup.string().trim().required().max(255),
    contry:yup.string().trim().required().max(50),
    phone:yup.string().trim().required().max(15),
    password : yup.string().required().min(8).max(64).matches(pwdRegex)

});
const logValidator=yup.object({
    credential : yup.string().trim().required().max(255),
    password : yup.string().required()
});

module.exports={registerValid,logValidator}