const fs = require('fs');
const filePath = require('database.json');
const { readData, writeData } = require ('../utils/file.js');


async function createuser(req, res){
    try {
        const date = await readData();

        //deteremine the last user id
        const lastUser = data.users(data.users.length - 1);

        //what happens if there is no users?
        const nextId = lastUser ? lastUser.id + 1 : 1;

        //create a new user object commit it to memory
        const newUser = {
            id: nextId,
            username: req.body.username,
            first_name: req.body.first_name,
            email: req.body.email,
        }

        //Push the new data to the mock json database
        data.users.push(newUser);

        //commits data by writing it to file
        await writeData(data);

    } catch (error) {
        res.status(500).json(`Internal Server Error: ${error}`);
        
    }
}

module.exports = {createUser};