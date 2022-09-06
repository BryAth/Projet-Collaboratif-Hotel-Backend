const adminRouter = require("./admin-router");
const chambreRouter = require("./chambreRouter");
const hotelRouter = require("./hotel-router");
const userRouter = require("./user-router")
const authRouter = require ("./auth-router")



const router = require('express').Router();



router.use('/user',userRouter)
router.use('/hotel',hotelRouter)
router.use('/chambre',chambreRouter)
router.use('/admin' , adminRouter)
router.use('/e',authRouter)



module.exports = router;