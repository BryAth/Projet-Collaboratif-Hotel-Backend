const yup = require('yup');

const chambreValidator = yup.object({
    nom : yup.string().trim().required().min(1).max(50),
    descriptionCourte: yup.string().trim().required().min(10).max(200),
    descriptionLongue : yup.string().trim().required().min(200).max(700),
    hotel: yup.string().trim().required().min(1).max(50),
    type: yup.string().trim().required().trim(),
    nombreDePersonnes: yup.number().required().positive(),
    prix:yup.number().required().positive(),
    salleDeBain:yup.number().required().positive(),
    nombreDeWc:yup.number().required().positive(),
    options:yup.object({
        balcon:yup.boolean(),
        airConditione: yup.boolean(),
        wifi:yup.boolean(),
        minibar : yup.boolean(),
        animaux : yup.boolean(),
        tv : yup.boolean(),
        dejeuner: yup.boolean(),
        disponible: yup.boolean(),

    })


})



module.exports = chambreValidator;