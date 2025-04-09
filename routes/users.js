const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
const { readData } = require('../utils/file.js');

router.use(express.json())
router.use(express.urlencoded({extended: true}));


//Router handler for our home page
router.get('/home',  (req, res)=>{
    res.render('home');
});

//api endpoint exposing the users resource
router.get('/api/v1/users', async (req, res) =>{
    try {
        const data = await readData();
        res.json(data);
    } catch (error) {
        res.status(500).json('Internal Server Error');
    }
});


//users post route to add a new user
router.post('/users', userController.createUser);


module.exports = router;