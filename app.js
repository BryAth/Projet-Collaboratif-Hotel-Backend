const express =  require("express");

require('express-async-errors')

const app = express();
const router = require("./routes");

app.use('/',router)



app.listen(3000,() => {
    console.log('Server up !')
})
