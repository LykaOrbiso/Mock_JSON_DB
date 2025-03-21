const express = require('express');
const app = express();
const userRoutes = require('./routes/users.js');
require('dotenv').config();
const PORT = process.env.PORT;


//Set up the view engine
app.set('view engine','ejs');
app.set('views', './views');

//Middleware the view engine
app.use(express.static('public'));
app.use(userRoutes);
app.listen(PORT, ()=>{
    console.log(`Connected to the port: ${PORT}`);
});