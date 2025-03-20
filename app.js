const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;


//Set up the view engine
app.set('view engine','ejs');
app.set('views', './views');


app.listen(PORT, ()=>{
    console.log(`Connected to the port: ${PORT}`);
});