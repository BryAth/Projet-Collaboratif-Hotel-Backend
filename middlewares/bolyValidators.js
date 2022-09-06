


const bodyValidation =  (yupValidator)  => {

    return async (req,res,next) => {
        
        try{
            
            
            
            const valiData = await yupValidator.noUnknown().validate(req.body,
                {
                    abortEarly : false
                })
                
                req.body = valiData;
                
                next();
        }
        
        catch(e) {
            res.sendStatus(400);
            console.log(e);
        }

    }

}

module.exports = bodyValidation;