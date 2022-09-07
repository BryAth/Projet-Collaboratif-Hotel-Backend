const tok=require('jsonwebtoken');

const {JWT_AUDIENCE, JWT_ISSUER, JWT_SECRET}=process.env;

const tokenUtils={
    generate:({id,pseudo,role})=>{
        return new Promise((resolve, reject) => {
                const payload={id,pseudo,role}
                
                const options={
                    algorithm:'HS256'?
                    expiresIn:'7d',
                    audience:JWT_AUDIENCE,
                    issuer:JWT_ISSUER
                }

                tok.sign(payload,JWT_SECRET,options,(error,token)=>{
                    if (error) {
                    //Si token a produit une erreur, notre promesse en rejetée
                    return reject(error);
                    }
                    //Si  token a fonctionné, le token généré
                    resolve(token);
                })
        });
    },
    decode:(token)=>{
        //si pas token
        if (!token) {
            return Promise .reject(new Error('pas de Token'));
        }
        // si token
        return new Promise((resolve, reject) => {
            const options={
                audience : JWT_AUDIENCE,
                issuer : JWT_ISSUER
            }
            tok.verify(token,JWT_SECRET,options,(error,playload)=>{
                //Si pas réussi décoder
                if (error) {
                    return reject(error);
                }
                //Si décoder
                resolve(playload)
            })

        });
    }
};

module.exports=tokenUtils;