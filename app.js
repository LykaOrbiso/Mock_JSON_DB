const express = require('express');
const app = express();
const userRoutes = require('./routes/users.js');
require('dotenv').config();
const PORT = process.env.PORT;
const rateLimit = require('express-rate-limit');
const FixedWindowRateLimit = rateLimit({
    windowsMs: 1 * 15 * 1000,
    max: 10, 
    message: 'Too many request. Please try again later.',
});

// set up the new engine
app.set('view engine','ejs');
app.set('views','./views');

//middleware to serve static files
app.use(express.static('public'));
app.use(FixedWindowRateLimit);
app.use(userRoutes);


app.listen(PORT,()=>{
    console.log(`connected on port: ${PORT}`);
});
