const express = require('express');
const app = express();
const userRoutes = require('./routes/users.js');
require('dotenv').config();
const PORT = process.env.PORT;


// set up the new engine
app.set('view engine','ejs');
app.set('views','./views');

//middleware to serve static files
app.use(express.static('public'));
app.use(userRoutes);

app.listen(PORT,()=>{
    console.log(`connected on port: ${PORT}`);
});
