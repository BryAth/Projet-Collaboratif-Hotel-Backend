const token=require('jsonwebtoken');

const {JWT_AUDIENCE, JWT_ISSUER, JWT_SECRET}=process.env;

const tokenUtils={
    generate:({id,pseudo,role})=>{
        return(
            new Promise((resolve, reject) => {
                const payload={id,pseudo,role}
            })
        )
    }
};

module.exports=tokenUtils;